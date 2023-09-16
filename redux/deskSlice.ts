import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface DeskState {
    book: boolean,
    book002: boolean,
    book003: boolean,
    laptop: boolean,
    notebook: boolean,
    clock: boolean,
    lotion: boolean,
    badminton_racket: boolean,
    riseDesk: boolean,
    skills: boolean,
    bag: boolean,
    discord: boolean,
    [props: string]: boolean | string,
}


const initialState: DeskState = {
    chair: false,
    blanket: false,
    book: false,
    bag: false,
    book002: false,
    book003: false,
    laptop: false,
    michael20: false,
    notebook: false,
    clock: false,
    lotion: false,
    rug: false,
    badminton_racket: false,
    deskColor: "#4d9be6",
    riseDesk: false,
    mlh: false,
    education: false,
    don: false,
    utmist: false,
    printingclub: false,
    welcomedesk: false,
    piano: false,
    sports: false,
    sports2: false,
    music: false,
    headphones: false,
    skills: false,
    discord: false,
    slippers: false,
    passport: false,
    pillow: false,
    render: false,//true if any prop is true, for squishing 3D scene when page active

}

export const deskSlice = createSlice({
    name: 'desk',
    initialState,
    reducers: {
        toggleState(state, action: PayloadAction<keyof DeskState>) {

            state[action.payload] = !state[action.payload];
            state.render = !state.render;
        },
        toggleStatePopup(state, action: PayloadAction<keyof DeskState>) {
            state[action.payload] = !state[action.payload];
        }
        ,
        changeDeskColor(state, action: PayloadAction<string>) {
            state.deskColor = action.payload
        }

    }
})


export const { toggleState, toggleStatePopup, changeDeskColor } = deskSlice.actions
export const getState = (state: any) => state.desk

export default deskSlice.reducer