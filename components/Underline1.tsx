import { useSpring, animated } from "@react-spring/web"


export default function UnderLine({ text, href }: { text: string, href: string }) {
    const [{ height }, set] = useSpring(() => ({ height: 2, config: { mass: 5, tension: 2000, friction: 200 } }))
    return (
        <>
            &nbsp;
            <span
                onMouseEnter={() => set({ height: 30 })}
                onMouseLeave={() => set({ height: 2 })}
                className='w-fit h-fit relative inline-block group z-10'>

                <a href={href}
                    target="_blank"
                    className=''
                >
                    {text} </a>
                <animated.span className='-z-10 w-full absolute bottom-0 left-0 bg-s-3'
                    style={{ height: height }}
                ></animated.span>

            </span>
            &nbsp;

        </>
    )
}