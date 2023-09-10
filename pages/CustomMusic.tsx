import { MusicData } from "@/data/MusicData"
import { motion } from "framer-motion"
import { myExit } from "@/utils/FramerMotionAnimations"
import { toggleState } from "@/redux/deskSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { getState, setMusicIndex, incrementMusicIndex, decrementMusicIndex } from "@/redux/controlsSlice"
import AnimatedBars from "@/components/AnimatedBars"
import { MutableRefObject, useEffect, useRef } from "react"
import {BiSkipNext,BiSkipPrevious} from 'react-icons/bi'
import InsetButton from "@/components/InsetButton"
import { useScroll, animated } from "@react-spring/web"
export default function CustomMusic() {

    const dispatch = useAppDispatch()

    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('headphones'))
    }

    const handleMusicIndex = (index: number) => {
        dispatch(setMusicIndex(index))
    }

    const scrollRef = useRef<any>(null)
    const musicComponents = MusicData.map((music, i) => {
        return (
            <motion.div key={music.title} onClick={() => handleMusicIndex(i)}
            className="tldr dark:hover:text-p-3"
            >
                <h1 className="text-xl">{music.title}</h1>
                <p>{music.artist}</p>
            </motion.div>
        )
    })

    const lines = 40 
    const width = 20
    const {scrollYProgress} = useScroll({
        container: scrollRef,
        default: {
            immediate: true,
        },

    })

    const musicIndex = useAppSelector(state=>getState(state).musicIndex)

    useEffect(() => {
        console.log(musicIndex)
    }, [musicIndex])
    return (
        <motion.div
            exit={myExit}
            className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full items-center justify-center bg-white dark:bg-black">
           <div className='w-full h-full fixed inset-0 pointer-events-none z-0'>
        <animated.div className={`flex flex-col justify-between z-20 items-end h-full`}>
          {Array.from({ length: lines }).map((_, i) => (
            <animated.div
              key={i}
              className={`h-[1vh] bg-s-3 dark:bg-p-3`}
              style={{
                width: scrollYProgress.to((scrollP:any) => {
                  const percentilePosition = (i + 1) / lines

                  return width / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32
                }),
              }}
            />
          ))}
        </animated.div>
        </div>
            <div className='header-top'>
                <h1 className='title'>Cool Beats</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className="mt-20 flex flex-col items-center justify-center">
            <h2>Now Playing</h2>
            <h1 className="title">{MusicData[musicIndex].title}</h1>
            </div>
             <div className="mt-10 flex flex-row items-center justify-center gap-8">
                <InsetButton onClick={()=>dispatch(decrementMusicIndex())} className="">
                    <BiSkipPrevious className="w-12 h-12" />
                </InsetButton>
                <InsetButton onClick={()=>dispatch(incrementMusicIndex())} className="">
                    <BiSkipNext className="w-12 h-12" />
                </InsetButton>
            </div> 
            <div className=' w-full p-4 h-fit flex flex-col items-center justify-center bg-gradient-to-b from-white via-white dark:from-black dark:via-black '>
                <div className="flex flex-col h-80 overflow-y-scroll w-fit scrollbar" ref={scrollRef} key="scrollref">
                    {musicComponents}
                </div>
            </div>

        </motion.div >  
    )
}