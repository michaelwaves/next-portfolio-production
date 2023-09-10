import { motion } from "framer-motion"
import { useRef } from "react"

export default function Slider3({ children }: { children: React.ReactNode }) {
    const dragConstraint = useRef(null)
    return (
        <motion.div className="relative w-40 h-20 select-none" ref={dragConstraint}>
            <motion.div drag dragConstraints={dragConstraint} className="w-1/2 h-full cursor-pointer flex flex-col text-white font-accent items-center justify-center bg-s-3 p-2 rounded-xl">
                {children}
            </motion.div>
        </motion.div>)
}