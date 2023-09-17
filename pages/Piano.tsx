"use client"
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/deskSlice'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'
import { toggleState as toggleMusic } from '@/redux/controlsSlice'
import { useRef } from 'react'

export default function Piano() {

    const dispatch = useAppDispatch()
    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('piano'))
        dispatch(toggleMusic('pauseMusic'));
        dispatch(toggleMusic("musicRef"))
    }

    return (
        <motion.div
            exit={myExit} className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll md:scrollbar items-center justify-center ">

            <div className='header-top'>
                <h1 className='title'>Piano</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className='body-sides'>
                <div className='mt-20 body-bg'>
                    <div className='flex flex-row gap-4 items-center justify-center'>


                    </div>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/cWRwL5VTv20?si=4ARlmMu3h2-mAP1W&amp;start=4" className="w-full md:w-[561px] mx-auto" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <iframe height="315" src="https://www.youtube.com/embed/02tfhAdDrco?si=pERd9Gb3vrq1Z1QA" className="w-full md:w-[561px] mx-auto" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
        </motion.div >
    )
}