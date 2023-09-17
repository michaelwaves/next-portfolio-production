import { handleLights, toggleState } from "@/redux/controlsSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useAppSelector } from "@/redux/hooks";
import { BiCurrentLocation } from "react-icons/bi";
import { motion, useCycle } from "framer-motion";
import { MusicData } from "@/data/MusicData";
import { FiSettings } from "react-icons/fi"
import { useRef, useEffect } from "react";
import InsetButton from "./InsetButton";
import LightSwitch from "./LightSwitch";

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
            /* const audioContext = new AudioContext();
            const source = audioContext.createMediaElementSource(audioRef.current);
            const gainNode = audioContext.createGain();
            source.connect(gainNode);
            gainNode.connect(audioContext.destination);
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(, audioContext.currentTime + 2); */
            audioRef.current.play()
        }
    }, [controlsState.musicRef, controlsState.musicIndex, controlsState.pauseMusic])

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
                    <InsetButton onClick={handleRecenter} className="">
                        <h1 className="md:block hidden text-lg">Recenter</h1>
                        <BiCurrentLocation className="block md:hidden" />
                    </InsetButton>
                    <LightSwitch />
                    <audio ref={audioRef} src={MusicData[controlsState.musicIndex].filepath} controls></audio>
                </div>
            </motion.div>
        </div>
    )
}