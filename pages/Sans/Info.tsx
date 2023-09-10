import { motion } from "framer-motion"
import { FiInfo } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"
import { sidebar } from "@/utils/FramerMotionAnimations"
import { INITIAL_SANS } from "@/data/AIData"


export default function Info() {
    const [isOpen, setOpen] = useState(false)
    return (
        <div className="z-60">
            <motion.button onClick={
                () => setOpen(!isOpen)
            }>
                <FiInfo className="bottom-16 left-4 w-12 h-12 z-50 hover:text-s-3 hover:dark:text-p-3" />
            </motion.button>
            <motion.div
                variants={sidebar}
                animate={isOpen ? "open" : "closed"}
                className=" fixed bottom-0 left-0 md:w-[clamp(200px,50vw,600px)] w-full rounded-xl bg-white dark:bg-black pl-20 flex items-center justify-center flex-col">
                <div className="flex flex-row w-full">
                    <p className="font-pixel">{INITIAL_SANS}</p>
                    <div className="w-12 m-2">
                        <AiOutlineClose className="w-12 h-12 z-50 hover:text-s-3 hover:dark:text-p-3" onClick={() => setOpen(false)} />
                    </div>
                </div>
            </motion.div>
        </div>
    )
}