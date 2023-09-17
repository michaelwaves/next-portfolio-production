import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MusicData } from "@/data/MusicData";

export interface ControlsState {
    darkMode: "dark" | "light" | "very_dark",
    notes: boolean,
    music: boolean,
    musicIndex: number,
    sound: boolean,
    main_lights: 0 | 1,
    point_lights: 0 | 1,
    lamps: 0 | 1,
    musicRef: boolean,
    position: [number, number, number],
    firstTime: boolean,
    recenter: boolean,
    mobileIndex: number,
    [props: string]: boolean | string | number | [number, number, number]
}
const initialState: ControlsState = {
    darkMode: "light",
    notes: true,
    music: true,
    sound: true,
    main_lights: 0,
    point_lights: 0,
    lamps: 1,
    musicIndex: 0,
    musicPlaying: false,
    musicVolume: 0.5,
    musicRef: false,
    position: [0, 0, 0],
    loading: true,
    firstTime: true,
    recenter: false,
    pauseMusic: false,
    mobileIndex: 0,
}

export const controlsSlice = createSlice({
    name: 'controls',
    initialState,
    reducers: {
        toggleState(state, action: PayloadAction<keyof ControlsState>) {
            state[action.payload] = !state[action.payload]
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload
        },
        changeDarkMode(state, action: PayloadAction<ControlsState["darkMode"]>) {
            state.darkMode = action.payload
        },

        setMusicIndex(state, action: PayloadAction<number>) {
            state.musicIndex = action.payload
        },
        incrementMusicIndex(state) {
            if (state.musicIndex === MusicData.length - 1) {
                state.musicIndex = 0
                return
            }
            state.musicIndex = state.musicIndex + 1
            //state.musicIndex = state.musicIndex===MusicData.length? state.musicIndex + 1: 0
        },
        decrementMusicIndex(state) {
            if (state.musicIndex === 0) {
                state.musicIndex = MusicData.length - 1
                return
            }
            state.musicIndex = state.musicIndex - 1
            //state.musicIndex = state.musicIndex===0? MusicData.length :state.musicIndex - 1 
        },
        pauseMusic(state) {
            state.pauseMusic = false
        },
        playMusic(state) {
            state.pauseMusic = true
        },
        handleLights(state) {
            state["main_lights"] = state["main_lights"] == 1 ? 0 : 1
            state["point_lights"] = state["point_lights"] == 1 ? 0 : 1
            state["lamps"] = state["lamps"] == 1 ? 0 : 1
        },
        setMusicRef(state, action: PayloadAction<any>) {
            state.musicRef = action.payload
        },
        setMobileIndex(state, action: PayloadAction<number>) {
            state.mobileIndex = action.payload
        }
    }
})
export const { playMusic, pauseMusic, toggleState, handleLights, setMusicIndex, incrementMusicIndex, decrementMusicIndex, setMusicRef, setLoading, setMobileIndex } = controlsSlice.actions
export const getState = (state: any) => state.controls

export default controlsSlice.reducer