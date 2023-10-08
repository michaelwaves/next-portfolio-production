//Chat.tsx
import OpenAI from "openai"
import { useReducer, useEffect } from "react";
import { SANS_PROMPT, INITIAL_SANS } from "@/data/AIData"
import { ChatCompletionRequestMessage } from "openai-edge"
import axios from "axios"
import { PulseLoader } from "react-spinners";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

const initialState = {
    messages: [{ "role": "assistant", "content": INITIAL_SANS }],
    input: "",
    output: "",
    loading: false,
    error: false,
};

type State = {
    messages: ChatCompletionRequestMessage[];
    input: string;
    output: string;
    loading: boolean;
    error: boolean;
};

type Action = {
    type: string;
    payload: any;
}

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "SET_INPUT":
            return {
                ...state,
                input: action.payload,
            };
        case "SET_OUTPUT":
            return {
                ...state,
                output: action.payload,
            };
        case "ADD_MESSAGE":
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        case "RESET_MESSAGES":
            return {
                ...state,
                messages: [],
            };
        case "REMOVE_MESSAGE":
            return {
                ...state,
                messages: state.messages.filter(
                    (_, index) => index !== action.payload
                ),
            };
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload,
            };
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
}

export default function Chat(): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState);

    const getContext = async (userMessage: string) => {
        try {
            const response = await axios.post(`https://localhost:8000/get_similar_texts?text=${encodeURIComponent(userMessage)}&k=${10}`);
            console.log(response.data);
            const context = response.data
                .map((item: any) => item.text)
                .join(' ');
            return context;
        } catch (error) {
            console.error(error);
        }
    };

    const apiCall = async (context: string) => {
        const prompt = `${SANS_PROMPT} Respond based on the following context:\n\n ${context} and the chat history below:`
        const p = [{ "role": "system", "content": prompt }, ...state.messages]
        try {
            const completion = await openai.chat.completions.create({
                model: "gpt-4",
                messages: p,
                max_tokens: 400,
                temperature: 0.8,

            })
            dispatch({ type: "SET_OUTPUT", payload: completion.choices[0].message?.content });
            dispatch({ type: "ADD_MESSAGE", payload: { role: "assistant", content: completion.choices[0].message?.content } });
        } catch (error) {
            dispatch({ type: "SET_ERROR", payload: true });
        }
        dispatch({ type: "SET_LOADING", payload: false });
    }

    useEffect(() => {
        //console.log(state);//debugging
        if (state.messages.length > 0) {
            if (state.messages.at(-1).role === "user" && state.messages.at(-1).content !== "") {
                const userMessage = state.messages.at(-1)
                getContext(userMessage?.content).then((context) => {
                    apiCall(context);
                });
            }
        }
    }, [state.messages]);

    const handleSubmitInput = async () => {
        //console.log("handleSubmitInput");//debugging
        console.log(state.messages);
        dispatch({ type: "SET_LOADING", payload: true });
        dispatch({ type: "ADD_MESSAGE", payload: { role: "user", content: state.input } });
        dispatch({ type: "SET_INPUT", payload: "" });
    }

    const messageComponents = state.messages.map((message, index) => {
        return (
            <div
                key={index}
                className={`flex flex-row relative p-4 gap-4 items-center group justify-between w-full ${message.role === "user" ? "bg-orange-500 dark:bg-blue-5" : "bg-gray-800 text-white"
                    }`}
            >
                <div className="flex flex-col gap-2 ">
                    <p className={`text-md font-bold ${message.role == "assistant" ? "font-pixel2" : ""}`}>{message.role == "assistant" ? "sans" : "human"}
                        <p className={`text-md ${message.role == "assistant" ? "font-pixel" : "font-body"}`}>{message.content}</p>
                </div>
            </div>
        )
    })
    return (
        <div className="w-clamp(400px,50vw,800px) bg-s-5 dark:bg-p-5 h-auto">
            <div className="flex flex-col h-full relative">
                <div className="flex w-full">
                    <h1 className="title text-xl w-full">The Skeleton in my Closet</h1>
                </div>
                <div className="max-h-80 md:pr-4 overflow-y-scroll md:scrollbar">
                    {messageComponents}
                    {state.loading && <PulseLoader color="#d1d5db" size={10} className="mx-auto w-12 h-6" />}
                </div>
                <div id="input-box">
                    <div className="flex flex-row items-center justify-between p-4">
                        <input
                            className="w-full mr-2 p-2 border border-gray-300 rounded-lg font-body dark:bg-gray-800"
                            type="text"
                            placeholder="Type something..."
                            value={state.input}
                            onChange={(e) =>
                                dispatch({ type: "SET_INPUT", payload: e.target.value })
                            }
                            onKeyDown={(e) => {
                                if (e.key === "Enter"
                                    && state.input !== "" && !state.loading && !state.error) {
                                    handleSubmitInput();
                                }

                            }
                            }
                        />
                        <button
                            className="px-4 py-2 text-white bg-s-3 dark:bg-p-3 rounded-lg"
                            onClick={() => handleSubmitInput()}

                        >
                            Send
                        </button>
                    </div>
                </div>
                <div>
                </div>
                <span className="text-sm text-red-500">
                    {state.error ? "Error: Check Console for Details" : ""}
                </span>
            </div >
        </div >
    )
}