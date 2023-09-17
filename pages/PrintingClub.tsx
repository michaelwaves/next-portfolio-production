"use client"
import Trail from '@/components/Trails'
import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/deskSlice'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'
import Image from 'next/image'

export default function PrintingClub() {

    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)

    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('printingclub'))
    }
    return (
        <motion.div
            exit={myExit}
            className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll scrollbar items-center justify-center ">
            <div className='header-top'>
                <h1 className='title'>3D Printing Club</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className="tldr-box">
                <Image width={1000} height={1000} src="/images/printer.jpg" alt="3D printer on a movable trolley" className="object-cover md:w-1/2 w-full" />
                <div className="flex flex-col space-y-4 items-center justify-center p-12 md:w-1/2">
                    <h2 className="tldr" onClick={() => setOpen(state => !state)}>TLDR</h2>
                    <div className="list-disc" onClick={() => setOpen(!open)}>
                        <Trail open={open}>
                            <span>Founded the Trinity College 3D Printing Club</span>
                            <span>Obtained $700 in funding to start a 3D printing makerspace</span>
                            <span>Ran 3D printing and 3D modelling Events</span>
                        </Trail>
                    </div>
                    <button onClick={() => window.open("https://devpost.com/software/kingsley-3qtkf1", "_blank")} className="tldr-button">
                        Checkout Project
                    </button>
                </div>
            </div>
            <div className='body-sides'>
                <div className=' body-bg'>
                    <h1 className='m-auto font-accent text-5xl'>
                        Starting a Club at Trinity College
                    </h1>
                    <p>
                        At Uoft, only engineering students are allowed to use the 3D printers. I wanted to bring the magic of 3D printing to Arts and Science students at Trinity, so I started a 3D printing club.
                    </p>
                    <Image width={1000} height={1000} src="/images/3dprint.jpg" alt="3D printer" />
                    <h2 className="mt-10">Funding and Setup</h2>
                    <ul className="list-disc list-inside">
                        <li>I drafted a mandate and budget and passed it through the student Governing Council </li>
                        <li>Once that was approved, I worked with facilities staff and an assistant registrar to secure a space and buy a storage cabinet</li>
                        <li>I put together a team of great executives, in charge of finance, operations, and marketing</li>
                    </ul>
                    <h2 className="mt-10">Events</h2>
                    <p>We ran weekly events teaching people how to 3D model in Blender, slice models in PrusaSlicer, and print their models.</p>
                    <Image width={1000} height={1000} src="/images/blender.jpg" alt="" />
                    <p>We also made some magnetic pins</p>
                    <Image width={1000} height={1000} src="/images/uoftears.jpg" alt="uoft tears white pin on blue uoft hoodie" />
                    <Image width={1000} height={1000} src="/images/hmh1.jpg" alt="White home sweet home robarts pin" />

                </div>
            </div>
        </motion.div >
    )
}
