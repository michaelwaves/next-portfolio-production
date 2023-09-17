import { motion } from "framer-motion"
import { useState } from "react"
import { useAppDispatch } from "@/redux/hooks"
import { pauseMusic, playMusic } from "@/redux/controlsSlice"
import { BsMusicNote } from 'react-icons/bs'
import { FaVolumeMute } from 'react-icons/fa'

export default function MusicSwitch() {
    const [withMusic, toggleMusic] = useState(true)
    const dispatch = useAppDispatch()
    const handleMusic = () => {
        if (withMusic) {
            dispatch(pauseMusic())
        } else {
            dispatch(playMusic())
        }
        toggleMusic(!withMusic)
    }
    return (
        <div
            onClick={() => handleMusic()}
            className={`w-16 h-10 flex rounded-full p-2 cursor-pointer dark:bg-p-3 bg-s-3  ${!withMusic ? "justify-start" : "justify-end"} items-center`}>
            <motion.button
                layout
                transition={{
                    type: "spring",
                    stiffness: 700,
                    damping: 30
                }}
                className="w-8 h-8 rounded-full bg-white dark:bg-black flex items-center justify-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                {withMusic ?
                    <BsMusicNote className="w-6 h-6" /> :
                    <FaVolumeMute className="w-6 h-6" />}

            </motion.button>
        </div>
    )
}