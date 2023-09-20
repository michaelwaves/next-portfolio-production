
import { useAppDispatch } from "@/redux/hooks";
import { useAppSelector } from "@/redux/hooks";
import { BsMusicNote } from 'react-icons/bs'
import { FaVolumeMute } from 'react-icons/fa'
import { motion } from "framer-motion";
import { AiOutlineInfoCircle } from "react-icons/ai"
import { toggleState, playMusic, pauseMusic } from "@/redux/controlsSlice";
import Image from "next/image";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import About from "@/components/About";
import Counter from "@/components/Counter";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 100,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0,
            type: "spring",
            stiffness: 600,
            damping: 40
        }
    }
};

export default function Info() {

    const [isOpen, toggleOpen] = useState(true)
    const [withMusic, toggleMusic] = useState(true)
    const dispatch = useAppDispatch()
    const controlsState = useAppSelector((state) => state.controls)
    const handleStart = () => {
        toggleOpen(false)
        /* if (controlsState.musicRef) {
            controlsState.musicRef.play()
        } */
        if (!withMusic) {
            dispatch(toggleState("musicRef"))
        }
    }
    const handleMusic = () => {
        if (withMusic) {
            dispatch(pauseMusic())
        } else {
            dispatch(playMusic())
        }
        toggleMusic(!withMusic)
    }

    /*   useEffect(() => {
          if (controlsState.loading) {
              NProgress.start()
          } else {
              NProgress.done()
          }
      }, [controlsState.loading])
   */

    return (
        <div className="fixed bottom-0 right-0 "
        >
            <motion.div

                variants={sidebar}
                animate={isOpen ? "open" : "closed"}
                className="fixed top-0 left-0 w-full p-4 h-full overflow-y-scroll md:scrollbar flex flex-row items-center justify-center  bg-white dark:bg-black">
                <div className='z-20 fixed top-0 left-0 w-full p-4 h-fit flex flex-row items-center justify-between bg-gradient-to-b from-white via-white dark:from-black dark:via-black'>
                    <div className="flex flex-row items-center justify-center">
                        <motion.button onClick={
                            () => toggleOpen(!isOpen)
                        } className="w-12 h-12">
                            <AiOutlineInfoCircle className=" w-12 h-12 z-20 hover:text-s-3 hover:dark:text-p-3 " />
                        </motion.button>
                        <h1 className='w-full md:text-5xl text-2xl title ml-4'>Michael&#39;s Room</h1>
                    </div>
                    <div className='w-1/3 flex justify-end z-30 ' onClick={() => toggleOpen(false)}>
                        <svg

                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div className='header-bg'></div>
                </div>
                <div className='relative w-full h-full flex flex-col mt-40 gap-4 md:gap-8'>
                    <About />
                    <div className="flex md:flex-row flex-col items-center gap-4 w-full justify-center">
                        <div className="flex items-center justify-center lg:flex-row flex-col gap-4">
                            <div className="intro-card">
                                <Image src="/icons/left click.svg" alt="left click" width={40} height={40} className='rounded-full h-12 w-12 dark:hidden block' />
                                <Image src="/icons/left click white.svg" alt="left click" width={40} height={40} className='rounded-full h-12 w-12 hidden dark:block' />
                                <p>Left Click Drag to Orbit</p>
                            </div>
                            <div className="intro-card">
                                <Image src="/icons/right click.svg" alt="right click" width={40} height={40} className='rounded-full h-12 w-12 dark:hidden block' />
                                <Image src="/icons/right click white.svg" alt="right click" width={40} height={40} className='rounded-full h-12 w-12 hidden dark:block' />
                                <p>Right Click Drag to Pan</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center lg:flex-row flex-col gap-4">
                            <div className="intro-card">
                                <Image src="/icons/scroll.svg" alt="scroll" width={40} height={40} className='rounded-full h-12 w-12 dark:hidden block' />
                                <Image src="/icons/scroll white.svg" alt="scroll" width={40} height={40} className='rounded-full h-12 w-12 hidden dark:block' />
                                <p>Scroll to Zoom</p>
                            </div>
                            <div className="intro-card">
                                <Image src="/icons/icon.svg" alt="icon" width={40} height={40} className='rounded-full h-12 w-12' />
                                <p>Click on objects to explore</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h2>Music?</h2>
                        <div
                            onClick={() => handleMusic()}
                            className={`w-16 h-10 flex rounded-full p-2 cursor-pointer dark:bg-p-3 bg-s-3  ${!withMusic ? "justify-start" : "justify-end"} items-center`}>
                            <motion.button
                                layout
                                transition={{
                                    type: "spring",
                                    stiffness: 700,
                                    damping: 30
                                }}
                                className="w-8 h-8 rounded-full bg-white dark:bg-black flex items-center justify-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                {withMusic ?
                                    <BsMusicNote className="w-6 h-6" /> :
                                    <FaVolumeMute className="w-6 h-6" />}

                            </motion.button>
                        </div>
                    </div>
                    {controlsState.loading ?
                        <div>
                            <Loading />
                            <Counter />
                        </div>
                        :
                        <div className="h-40 mb-20">
                            <div className={`font-heading relative w-fit h-fit overflow-hidden pb-2 rounded-xl mx-auto`}>
                                <button
                                    onClick={handleStart}
                                    className={`text-white hover:translate-y-2 transition-all duration-75 bg-s-3 rounded-xl p-4 active:bg-s-5 active:translate-y-4
                                dark:bg-p-3 dark:active:bg-p-5
                                `}>
                                    <h1>Let&#39;s Go!</h1>
                                </button>
                                <div className={`bg-s-1 dark:bg-p-1 absolute top-0 left-0 rounded-xl mt-2 w-full h-full -z-10`} />
                            </div>
                        </div>
                    }

                </div>

            </motion.div>
        </div>
    )
}