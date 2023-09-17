"use client"
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/closetSlice'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'

interface PageTemplateProps {
    title: string
    reduxProperty: string
    children: React.ReactNode
}

export default function PageTemplate({ title, reduxProperty, children }: PageTemplateProps) {

    const dispatch = useAppDispatch()

    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState(reduxProperty))
    }
    return (
        <motion.div
            exit={myExit}
            className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll md:scrollbar  items-center justify-center ">
            <div className='header-top'>
                <h1 className='title'>{title}</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            {children}
        </motion.div>
    )
}