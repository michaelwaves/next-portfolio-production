"use client"
import OpenAI from "openai";
import { useReducer, useEffect, useState } from "react";
import { RiEdit2Line } from "react-icons/ri"
import { AiOutlineDelete } from 'react-icons/ai';
import { reducer } from "../../utils/utils";
import { getContext } from "../../utils/utils";
import { SANS_PROMPT, INITIAL_SANS } from "@/data/AIData";
import { db } from "../../components/Firebase";
import { setDoc, updateDoc, collection, doc } from "firebase/firestore/lite";
import { PulseLoader } from "react-spinners";

const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
});

const initialState = {
    messages: [{ "role": "assistant", "content": INITIAL_SANS }],
    editMode: [],
    editInput: "",
    input: "",
    output: "",
    loading: false,
    error: false,
};


export default function Openai(): JSX.Element {
    const [state, dispatch] = useReducer(reducer, initialState);
    const collectionRef = collection(db, "chats");
    const [dateString, setDate] = useState("");
    useEffect(() => {
        const date = new Date();
        const dateString = date.toISOString();//unique id every time
        setDoc(doc(collectionRef, dateString), { messages: [] })
        setDate(dateString);
    }, []);

    useEffect(() => {
        try {
            updateDoc(doc(collectionRef, dateString), { messages: state.messages.slice(1) })
        } catch (error) {
            console.log(error)
        }

    }, [state.messages]);

    useEffect(() => {
        console.log(state);
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
        console.log("handleSubmitInput");
        console.log(state.messages);
        dispatch({ type: "SET_LOADING", payload: true });
        dispatch({ type: "ADD_MESSAGE", payload: { role: "user", content: state.input } });
        dispatch({ type: "SET_INPUT", payload: "" });
    }

    const messages = state.messages.map((message, index) => {
        return (
            <div
                key={index}
                className={`flex flex-row relative p-4 gap-4 items-center group justify-between w-full ${message.role === "user" ? "bg-s-5 dark:bg-p-5" : "bg-gray-800 text-white"
                    }`}
            >
                <div className="flex flex-col gap-2 ">
                    <p className={`text-md font-bold ${message.role == "assistant" ? "font-pixel2" : ""}`}>{message.role == "assistant" ? "sans" : "human"}</p>
                    {state.editMode[index] ?
                        <input type="text" value={state.editInput}
                            onChange={(e) => dispatch({ type: "SET_EDIT_INPUT", payload: e.target.value })}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    // Handle Enter key press for saving the message
                                    dispatch({ type: "EDIT_MESSAGE", payload: { index: index, content: state.editInput } });
                                    dispatch({ type: "TOGGLE_EDIT_MODE", payload: index });
                                } else if (e.key === "Escape") {
                                    // Handle Esc key press for discarding the edit
                                    dispatch({ type: "TOGGLE_EDIT_MODE", payload: index });
                                }
                            }}
                        ></input> :
                        <p className={`text-md ${message.role == "assistant" ? "font-pixel" : "font-body"}`}>{message.content}</p>
                    }
                </div>
                <div className="hidden absolute group-hover:block top-2 right-2">
                    <div className="flex-row flex space-x-2">
                        <div className="relative">
                            <button
                                className="px-2 py-1 text-white bg-red-500 rounded-lg relative peer"
                                onClick={() => dispatch({ type: "REMOVE_MESSAGE", payload: index })}
                            >

                                <AiOutlineDelete />
                            </button>
                            <div className="hidden peer-hover:flex bg-primary-light p-2 py-[0.1rem] -translate-x-2 rounded-xl absolute my-auto top-0 left-0 -translate-y-full"> Delete
                                <div className="absolute w-2 h-2 transform rotate-45 bg-primary-light -translate-x-1/2 -translate-y-1 top-full left-1/2"></div>
                            </div>
                        </div>
                        <div className="relative">
                            <button
                                className="px-2 py-1 text-white bg-green-500 rounded-lg peer"
                                onClick={() => {
                                    dispatch({ type: "TOGGLE_EDIT_MODE", payload: index });
                                    dispatch({ type: "SET_EDIT_INPUT", payload: message.content });
                                }}
                            >
                                <RiEdit2Line />
                            </button>
                            <div className="hidden peer-hover:flex bg-primary-light p-2 py-[0.1rem] rounded-xl absolute my-auto top-0 left-0 -translate-y-full"> Edit
                                <div className="absolute w-2 h-2 transform rotate-45 bg-primary-light -translate-x-1/2 -translate-y-1 top-full left-1/2"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div className="w-clamp(400px,50vw,800px) bg-s-5 dark:bg-p-5 h-auto">
            <div className="flex flex-col h-full relative">
                <div className="flex w-full">
                    <h1 className="title text-xl w-full">The Skeleton in my Closet</h1>
                    {/*  <Info /> */}
                </div>
                <div className="max-h-80 md:pr-4 overflow-y-scroll md:scrollbar">
                    {messages}
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
                                    && state.input !== "" && !state.loading && !state.error
                                    && state.editMode.every((editMode) => editMode === false)) {
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
                    {state.error ? "Error: " + state.messages : ""}
                </span>
            </div >
        </div >
    )
}