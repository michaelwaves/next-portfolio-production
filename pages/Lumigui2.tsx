"use client"
import Trail from '@/components/Trails'
import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/closetSlice'
import UnderLine from '@/components/UnderLine'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'

export default function Lumigui2() {

    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)

    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('lumigui'))
    }
    return (
        <motion.div
            exit={myExit}
            className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll items-center justify-center ">
            <div className='header-top'>
                <h1 className='title'>Lumigui</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className="tldr-box">
                <img src="/images/lumiguihand.jpg" alt="michael and the mayor of kingston and two friends in front of shiny Q H 2023 balloons" className="object-cover md:w-1/2 w-full" />
                <div className="flex flex-col space-y-4 items-center justify-center p-12 md:w-1/2">
                    <h2 className="tldr" onClick={() => setOpen(state => !state)}>TLDR</h2>
                    <div className="list-disc" onClick={() => setOpen(!open)}>
                        <Trail open={open}>
                            <span>Touchless medical form input device with react, python autogui, and arduino</span>
                            <span>Stayed up way too late</span>
                            <span>Won 1st Place at MHacks 15</span>
                        </Trail>
                    </div>
                    <button onClick={() => window.open("https://devpost.com/software/lumigui", "_blank")} className="tldr-button">
                        Checkout Project
                    </button>
                </div>
            </div>
            <div className='body-sides'>
                <div className=' body-bg'>
                    <h1 className='m-auto font-accent text-5xl'>
                        Welcome to the future of medical forms
                    </h1>
                    <p>
                        Filling in forms is no fun, but it's even worse when using pens and ipads touched by dozens of sick people. We wanted to create a touchless interface for filling in medical forms. So we built a custom website in react, wrote a python autogui script, and designed an arduino board with five photoresistors.
                        Users could use five functions: next, previous, enter, delete, and activate voice typing. The photoresistors would detect the user's hand and trigger the autogui script to perform the corresponding action.
                        We also designed and 3D printed a custom box to make it look cool.
                        My friend and I stayed up until 6am building, testing, and filming our submission video
                    </p>
                    <img src="/images/lumiguifunctions.jpg" alt="" />
                    <h2 className="mt-10">How it Works</h2>
                    <ul className="list-disc list-inside">
                        <li>Lumigui uses
                            <UnderLine text='pyautogui' href='https://pypi.org/project/PyAutoGUI/' />
                            to trigger common interface commands</li>
                        <li>We used microsoft text to speech for voice typing</li>
                        <li>A custom box was designed using  <UnderLine text='Blender' href="https://blender.org" /></li>
                        <li>Five photoresistors were used to detect the user's hand</li>
                    </ul>
                    <h2 className="mt-10">Technologies Used</h2>
                    <ul className="list-disc list-inside">
                        <li>React</li>
                        <li>PyAutoGUI</li>
                        <li>Blender</li>
                        <li>PrusaSlicer</li>
                    </ul>

                </div>
            </div>
        </motion.div >
    )
}
