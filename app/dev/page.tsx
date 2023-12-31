"use client"

import Qhacks from "@/pages/Qhacks";
import RiseDesk from "@/pages/RiseDesk/RiseDesk";
import ColorSelector from "@/components/ColorSelector";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "@/redux/store";

export default function Page() {
    return (
        <>
            <Provider store={store}>
                <ColorSelector colors={[
                    "#323353",
                    "#484a77",
                    "#4d65b4",
                    "#4d9be6",
                    "#8fd3ff"]} />
                <RiseDesk />
            </Provider>
        </>
    );
}