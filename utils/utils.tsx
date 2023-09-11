import { ChatCompletionRequestMessage } from "openai-edge";
import axios from "axios";

type State = {
    messages: ChatCompletionRequestMessage[];
    editMode: boolean[];
    editInput: string;
    input: string;
    output: string;
    loading: boolean;
    error: boolean;
};

type Action = {
    type: string;
    payload: any;
}

export const reducer = (state: State, action: Action) => {
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
                editMode: [...state.editMode, false],
            };
        case "EDIT_MESSAGE":
            return {
                ...state,
                messages: state.messages.map((message, index) => {
                    if (index === action.payload.index) {
                        return {
                            ...message,
                            content: action.payload.content,
                        };
                    }
                    return message;
                }
                ),
            }
        case "SET_EDIT_INPUT":
            return {
                ...state,
                editInput: action.payload,
            };
        case "TOGGLE_EDIT_MODE":
            return {
                ...state,
                editMode: state.editMode.map((_, index) =>
                    index === action.payload ? !state.editMode[index] : false
                ),
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

export const getContext = async (userMessage: string) => {
    try {
        const response = await axios.post(`https://myroom-xxgd3bbsyq-uc.a.run.app/get_similar_texts?text=${encodeURIComponent(userMessage)}&k=${10}`);
        console.log(response.data);
        const therapistLines = response.data
            .map((item: any) => item.text)
            .join(' ');
        //console.log(therapistLines)
        return therapistLines;
    } catch (error) {
        console.error(error);
    }
};