"use client"
import Trail from '@/components/Trails'
import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/deskSlice'
import UnderLine from '@/components/UnderLine'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'
import Image from 'next/image'

export default function Don() {

    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)

    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('don'))
    }
    return (
        <motion.div
            exit={myExit}
            className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll scrollbar items-center justify-center ">
            <div className='header-top'>
                <h1 className='title'>Community Advisor</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className="tldr-box">
                <Image width={1000} height={1000} src="/images/ca_poster.jpg" alt="michael's ca poster" className="object-cover md:w-1/2 w-full" />
                <div className="flex flex-col space-y-4 items-center justify-center p-12 md:w-1/2">
                    <h2 className="tldr" onClick={() => setOpen(state => !state)}>TLDR</h2>
                    <div className="list-disc" onClick={() => setOpen(!open)}>
                        <Trail open={open}>
                            <span>Live in staff at Trinity College</span>
                            <span>Supervised and assisted an area of 15 residents</span>
                            <span>Organized and ran events for residents</span>
                            <span>Made new friends along the way</span>
                        </Trail>
                    </div>

                </div>
            </div>
            <div className='body-sides'>
                <div className=' body-bg'>
                    <h1 className='m-auto font-accent text-5xl'>
                        Advising the Community
                    </h1>
                    <p>
                        In third year, I was a Community Advisor &#40;Don/RA&#41; at Trinity College.
                        I helped younger students settle into university life and supervised a floor of 15 residents.
                        I also organized events for the community, such as movie nights, game nights, and my personal favorite, cake night 😋🛖.
                    </p>
                    <Image width={1000} height={1000} src="/images/cakenight.jpg" alt="girl making cake on brown wooden table" />

                </div>
            </div>
        </motion.div >
    )
}
