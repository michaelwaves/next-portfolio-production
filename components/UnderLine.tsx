import { useAppDispatch } from "@/redux/hooks"
import { setHovered } from "@/redux/controlsSlice"

export default function UnderLine({ text, href }: { text: string, href: string }) {
    const dispatch = useAppDispatch()
    return (
        <>
            &nbsp;
            <span className='w-fit h-fit relative inline-block group z-10 cursor-none'
                onMouseEnter={() => dispatch(setHovered("hover"))}
                onMouseLeave={() => dispatch(setHovered("unhover"))}
            >

                <a href={href}
                    target="_blank"
                    className='cursor-none'
                >
                    {text} </a>
                <span className='transition-all ease-out duration-[75ms] -z-10 w-full absolute bottom-0 left-0 h-1 bg-s-3 dark:bg-p-3 group-hover:h-full'></span>

            </span>
            &nbsp;

        </>
    )
}
