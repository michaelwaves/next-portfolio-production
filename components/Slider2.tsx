import { useSpring, animated } from "@react-spring/web"
import { useDrag } from "@use-gesture/react"

export default function Slider2({ children }: { children: React.ReactNode }) {
    const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }))
    const bind = useDrag(({ down, offset: [ox, oy] }) => api.start({
        x: ox,
        y: oy,
        immediate: name => down && name == "x"
    }), {
        bounds: { left: 0, right: 80, top: 0, bottom: 0 }
    })
    return (
        <animated.div {...bind()} className="relative w-40 h-20 select-none">
            <animated.div style={{ x, y }} className="w-1/2 h-full cursor-pointer flex flex-col text-white font-accent items-center justify-center bg-s-3 p-2 rounded-xl">

                {children}
            </animated.div>
        </animated.div>)
}