"use client"
import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/deskSlice'
import UnderLine from '@/components/UnderLine'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'
import { useSpring, a } from '@react-spring/web'

export default function PingPong() {

    const dispatch = useAppDispatch()
    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('sports2'))
    }
    return (
        <motion.div
            exit={myExit} className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll items-center justify-center ">

            <div className='header-top'>
                <h1 className='title'>PingPong</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className='body-sides'>
                <div className='mt-20 body-bg'>
                    <h1 className="mt-10 text-5xl font-accent mx-auto">Ping Pong</h1>
                    <p>
                        I played ping pong with my dad since I was little but I'm not very good.
                        It's a fun sport to play with friends.
                    </p>
                    <div className='flex md:flex-row flex-col '>
                        <img src="/images/pingpong.jpg" alt="" className='object-cover'/>
                        <img src="/images/pingpong2.jpg" alt="" className=' object-cover'/>
                    </div>
                </div>
            </div>
        </motion.div >
    )
}
