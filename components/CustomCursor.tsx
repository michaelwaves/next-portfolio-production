import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useAppSelector } from "@/redux/hooks"
import { getState } from "@/redux/controlsSlice"
export default function CustomCursor() {
    const WIDTH = 8
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const springConfig = { damping: 20, stiffness: 700, mass: 0.5 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)
    useEffect(() => {
        const moveCursor = (e: any) => {
            cursorX.set(e.clientX - WIDTH)
            cursorY.set(e.clientY - WIDTH)
        }
        window.addEventListener('mousemove', moveCursor)
        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])

    const controlsState = useAppSelector(getState)

    const hoverVariants = {
        hover: {
            scale: 4,
            border: controlsState.isDark ? '2px solid #fff' : '2px solid #fff',
            transition: {
                duration: 0.2,
                ease: 'easeInOut',
            },
            opacity: 1,
            mixBlendMode: 'difference',
            background: 'white'
        },
        hoverSmall: {
            scale: 1,
            border: controlsState.isDark ? '8px solid rgb(4 148 226)' : '8px solid rgb(251 107 29)',
            transition: {
                duration: 0.2,
                ease: 'easeInOut',
            },
            opacity: 1,
        },
        unhover: {
            scale: 2,
            border: controlsState.isDark ? '1px solid #fff' : '1px solid #000',
            transition: {
                duration: 0.2,
                ease: 'easeInOut',
            },
            opacity: 1,
        },
    }


    return (
        <motion.div
            variants={hoverVariants as any}
            animate={controlsState.hovered}
            className="sm:block hidden fixed left-0 top-0 w-4 h-4 border-[2px] rounded-full pointer-events-none z-50"
            style={{
                translateX: cursorX,
                translateY: cursorY,
            }}>

        </motion.div>
    )
}