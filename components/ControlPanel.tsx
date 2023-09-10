import { handleLights, toggleState } from "@/redux/controlsSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useAppSelector } from "@/redux/hooks";
import { BiCurrentLocation } from "react-icons/bi";
import { motion, useCycle } from "framer-motion";
import { MusicData } from "@/data/MusicData";
import { FiSettings } from "react-icons/fi"
import { useRef, useEffect } from "react";
import InsetButton from "./InsetButton";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 100,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0,
            type: "spring",
            stiffness: 600,
            damping: 40
        }
    }
};

export default function ControlPanel() {
    const audioRef = useRef<HTMLAudioElement>(null)
    const [isOpen, toggleOpen] = useCycle(false, true);
    const controlsState = useAppSelector((state) => state.controls)
    const dispatch = useAppDispatch()
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.4
        }
    }, [])
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play()
        }
    }, [controlsState.musicRef, controlsState.musicIndex])

    useEffect(() => {
        if (audioRef.current && controlsState.pauseMusic == true) {
            audioRef.current.pause()
        }
    }, [controlsState.pauseMusic])

    const handleRecenter = () => {
        dispatch(toggleState("firstTime"))
        dispatch(toggleState("recenter"))
    }
    return (
        <div className="fixed bottom-0 left-0">
            <motion.button onClick={
                () => toggleOpen()
            }>
                <FiSettings className=" absolute bottom-16 left-4 w-12 h-12 z-50 hover:text-s-3 hover:dark:text-p-3" />
            </motion.button>
            <motion.div
                variants={sidebar}
                animate={isOpen ? "open" : "closed"}
                className="fixed bottom-0 left-0 md:w-[clamp(200px,50vw,600px)] w-full rounded-xl bg-white dark:bg-black p-4 flex items-center justify-center flex-col">
                <h1 className="font-accent">Control Panel</h1>
                <div className="flex flex-row items-center gap-4 pl-4">
                    {/* <button
                        onClick={() => window.open("mailto:michaelyu713705@gmail.com")}
                        className="flex items-center justify-center hover:bg-s-3 p-4 rounded-3xl bg-white text-s-3 hover:text-white">Email
                        <HiOutlineMail className="w-6 h-6 ml-2 " />
                    </button> */}
                    <InsetButton onClick={handleRecenter} className="">
                        <h1 className="md:block hidden text-lg">Recenter</h1>
                        <BiCurrentLocation className="block md:hidden" />
                    </InsetButton>
                    <div
                        onClick={() => dispatch(handleLights())}
                        className={`w-16 h-10 flex rounded-full p-2 cursor-pointer ${controlsState.main_lights == 1 ? "justify-start bg-p-3" : "justify-end bg-s-3"} items-center`}>
                        <motion.button
                            layout
                            transition={{
                                type: "spring",
                                stiffness: 700,
                                damping: 30
                            }}
                            className="w-8 h-8 rounded-full bg-white dark:bg-black flex items-center justify-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                            {controlsState.main_lights == 1 ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                            </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                </svg>}

                        </motion.button>
                    </div>
                    <audio ref={audioRef} src={MusicData[controlsState.musicIndex].filepath} controls></audio>
                </div>
            </motion.div>
        </div>
    )
}