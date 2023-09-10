import React, { ReactNode } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'


const left = {
    bg: `linear-gradient(120deg, #4d9be6 0%, #4d65b4" 100%)`,
    justifySelf: 'end',
}
const right = {
    bg: `linear-gradient(120deg, #fbb954 0%, #fb6b1d 100%)`,
    justifySelf: 'start',
}


const Slider = ({ children }: { children: ReactNode }) => {
    const [{ x, bg, scale, justifySelf }, api] = useSpring(() => ({
        x: 0,
        scale: 1,
        ...left,
    }))
    const bind = useDrag(({ active, movement: [x] }) =>
        api.start({
            x: active ? x : 0,
            ...(x < 0 ? left : right),
            immediate: name => active && name === 'x',

        }), { bounds: { left: -100, right: 100 } },
    )

    const avSize = x.to({
        map: Math.abs,
        range: [50, 300],
        output: [0.5, 1],
        extrapolate: 'clamp',
    })

    return (
        <animated.div {...bind()} className="relative w-[300px] h-[100px] pointer-events-auto  pl-32 pr-32 box-border grid items-center text-center rounded-xl shadow-md select-none" style={{ background: bg }}>
            <animated.div className="w-10 h-10 rounded-full bg-white" style={{ scale: avSize, justifySelf }}>

            </animated.div>
            <animated.div className={"cursor-grab bg-s-3 text-white text-opacity-80 absolute h-full w-1/2 grid place-items-center rounded-xl shadow-lg text-3xl font-semibold transition-shadow duration-75"} style={{ x }}>
                {children}
            </animated.div>
        </animated.div>
    )
}

export default Slider;