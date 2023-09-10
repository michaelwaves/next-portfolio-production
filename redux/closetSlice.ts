import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SANS_PROMPT } from "@/data/AIData";
export interface ClosetState {
    qhacks: boolean,
    initialMessages: any[],
    [props: string]: boolean | any[],
}

const initialState: ClosetState = {
    qhacks: false,
    near: false,
    lumigui: false,
    uottahack: false,
    covermegpt: false,
    vocalverse: false,
    sansChat: false,
    initialMessages: [{ id: "system", role: "system", content: SANS_PROMPT, createdAt: "now" }],
}

export const closetSlice = createSlice({
    name: 'closet',
    initialState,
    reducers: {
        toggleState(state, action: PayloadAction<keyof ClosetState>) {

            state[action.payload] = !state[action.payload]
        },
        toggleStatePopup(state, action: PayloadAction<keyof ClosetState>) {

            state[action.payload] = !state[action.payload]
        },
        setInitialMessages(state, action: PayloadAction<any[]>) {
            state.initialMessages = action.payload
        },
    }
})

export const { toggleState, toggleStatePopup, setInitialMessages } = closetSlice.actions
export const getState = (state: any) => state.closet
export const getInitialMessages = (state: any) => state.closet.initialMessages

export default closetSlice.reducer