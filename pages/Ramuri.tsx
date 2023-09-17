"use client"
import Trail from '@/components/Trails'
import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/deskSlice'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'
import Image from 'next/image'

export default function Ramuri() {

    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)

    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('ramuri'))
    }
    return (
        <motion.div
            exit={myExit} className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll scrollbar items-center justify-center ">
            <div className='header-top'>
                <h1 className='title'>Ramuri</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className="tldr-box">
                <Image width={1000} height={1000} src="/images/ramuri.png" alt="brand portal" className="object-cover md:w-1/2 w-full" />
                <div className="flex flex-col space-y-4 items-center justify-center p-12 md:w-1/2">
                    <h2 className="tldr" onClick={() => setOpen(state => !state)}>TLDR</h2>
                    <div className="list-disc" onClick={() => setOpen(!open)}>
                        <Trail open={open}>
                            <span>First Frontend Development Role</span>
                            <span>ESG rating machine learning Chrome extension</span>
                            <span>React, Python webscriping, and Heroku</span>
                        </Trail>
                    </div>
                    <button onClick={() => window.open("https://ramuri-brand-portal.vercel.app/", "_blank")}
                        className="tldr-button">
                        Checkout Project
                    </button>
                </div>
            </div>
            <div className='body-sides'>
                <div className=' body-bg'>
                    <h1 className='m-auto font-accent text-5xl'>
                        Shop the Change you want to see
                    </h1>
                    <p>
                        I met the founders of Ramuri at an event run by the Hatchery, a University of Toronto startup incubator. They wanted to use machine learning to promote sustainable alternatives to brands. I helped them build their frontend with React, and did webscraping with Python to populate their brand database.
                    </p>
                    <Image width={1000} height={1000} src="/images/ramuri2.png" alt="" />

                </div>
            </div>
        </motion.div >
    )
}
