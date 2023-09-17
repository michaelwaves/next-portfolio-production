import { motion } from "framer-motion"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getState, setIsDark } from "@/redux/controlsSlice"
import { useEffect} from "react"
import { getCookie, setCookie} from "cookies-next"

export default function MobileLightSwitch() {
    const dispatch = useAppDispatch()
    const controlsState = useAppSelector(getState)
    useEffect(() => {
        getCookie("isDark") == "true" ? dispatch(setIsDark(true)) : dispatch(setIsDark(false))
    }, [])
    return (
        <div
            onClick={() => {setCookie("isDark", !controlsState.isDark); dispatch(setIsDark(!controlsState.isDark))}}
            className={`w-16 h-10 flex rounded-full p-2 cursor-pointer ${controlsState.isDark ? "justify-start bg-p-3" : "justify-end bg-s-3"} items-center`}>
            <motion.button
                layout
                transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 30
                }}
                className="w-8 h-8 rounded-full bg-white dark:bg-black flex items-center justify-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                {controlsState.isDark ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>}

            </motion.button>
        </div>
    )
}