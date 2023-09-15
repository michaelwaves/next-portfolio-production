import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
export default function CustomCursor() {
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const springConfig = { damping: 20, stiffness: 700, mass: 0.5 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)
    useEffect(() => {
        const moveCursor = (e: any) => {
            cursorX.set(e.clientX - 16)
            cursorY.set(e.clientY - 16)
        }
        window.addEventListener('mousemove', moveCursor)
        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    return (
        <motion.div
            className="sm:block hidden mix-blend-lighten bg-white fixed left-0 top-0 w-4 h-4 dark:border-p-3 border-s-3 border-[16px] rounded-full pointer-events-none z-50"
            style={{
                translateX: cursorX,
                translateY: cursorY,
            }}>

        </motion.div>
    )
}