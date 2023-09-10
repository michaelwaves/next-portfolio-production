import { configureStore } from "@reduxjs/toolkit";
import { deskSlice } from "./deskSlice";
import { controlsSlice } from "./controlsSlice";
import { closetSlice } from "./closetSlice";
/* import { createWrapper } from "next-redux-wrapper"; */

const store = configureStore({
    reducer: {
        [deskSlice.name]: deskSlice.reducer,
        [controlsSlice.name]: controlsSlice.reducer,
        [closetSlice.name]: closetSlice.reducer,
    },
    devTools: true
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
/* export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export const wrapper = createWrapper<AppStore>(makeStore); */