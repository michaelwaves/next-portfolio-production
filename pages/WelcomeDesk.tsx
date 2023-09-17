"use client"
import Trail from '@/components/Trails'
import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/deskSlice'
import UnderLine from '@/components/UnderLine'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'
import Image from 'next/image'

export default function WelcomeDesk() {

    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)

    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('welcomedesk'))
    }
    return (
        <motion.div
            exit={myExit} className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll scrollbar items-center justify-center ">
            <div className='header-top'>
                <h1 className='title'>Welcome Desk</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className="tldr-box">
                <Image width={1000} height={1000} src="/images/welcomedesk2.jpg" alt="Trinity College on a cloudy day" className="object-cover md:w-1/2 w-full" />
                <div className="flex flex-col space-y-4 items-center justify-center p-12 md:w-1/2">
                    <h2 className="tldr" onClick={() => setOpen(state => !state)}>TLDR</h2>
                    <div className="list-disc" onClick={() => setOpen(!open)}>
                        <Trail open={open}>
                            <span>Gatekeeper and first point of contact for Trinity College</span>
                            <span>Checked students in and out, managed mail and parcels </span>
                            <span>Helped with other office tasks as needed</span>
                        </Trail>
                    </div>
                </div>
            </div>
            <div className='body-sides'>
                <div className=' body-bg'>
                    <h1 className='m-auto font-accent text-5xl'>
                        Assisting the Welcome Desk
                    </h1>
                    <p>
                        I worked part time at the Trinity College welcome desk. Everyone was really chill and it was fun meeting new people.
                    </p>
                    <h2>Tasks</h2>
                    <ul className='list-disc'>
                        <li>Checking Students In and Out</li>
                        <li>Receiving Mail and Parcels</li>
                        <li>Answering Questions</li>
                        <li>Preparing Shift Reports</li>
                        <li>Managing the Lost and Found</li>
                        <li>Room Bookings</li>
                        <li>Student Lockouts</li>
                        <li>Answering Phones</li>
                        <li>Other Office Tasks</li>
                    </ul>
                    <Image width={1000} height={1000} src="/images/welcomedesk.jpg" alt="The welcome desk, white desk with metal light with Welcome carved into it, painting by group of seven behind the desk" />
                </div>
            </div>
        </motion.div >
    )
}
