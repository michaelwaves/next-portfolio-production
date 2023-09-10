import { MusicData } from "@/data/MusicData"
import { motion } from "framer-motion"
import { myExit } from "@/utils/FramerMotionAnimations"
import { toggleState } from "@/redux/deskSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getState, setMusicIndex, incrementMusicIndex, decrementMusicIndex } from "@/redux/controlsSlice"
import {useEffect, useRef } from "react"
import {BiSkipNext,BiSkipPrevious} from 'react-icons/bi'
import InsetButton from "@/components/InsetButton"
import { useScroll, animated } from "@react-spring/web"
import { SkillsData } from "@/data/SkillsData"
import Grid from "./Grid"

export default function Skills() {

    const dispatch = useAppDispatch()

    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('skills'))
    }

    const handleMusicIndex = (index: number) => {
        dispatch(setMusicIndex(index))
    }

    const scrollRef = useRef<any>(null)

    const lines = 40 
    const width = 20
    const {scrollYProgress} = useScroll({
        container: scrollRef,
        default: {
            immediate: true,
        },

    })

    const musicIndex = useAppSelector(state=>getState(state).musicIndex)

    return (
        <motion.div
            ref={scrollRef}
            exit={myExit}
            className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full items-center justify-center bg-white dark:bg-black">
           <div className='w-full h-full fixed inset-0 pointer-events-none z-0'>
        </div>
            <div className='header-top'>
                <h1 className='title'>Skills</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            
        <Grid/>
   
            

        </motion.div >  
    )
}