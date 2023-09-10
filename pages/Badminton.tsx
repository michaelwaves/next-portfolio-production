"use client"
import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/deskSlice'
import UnderLine from '@/components/UnderLine'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'
import { useSpring, a } from '@react-spring/web'

export default function Badminton() {
    const [badminton, setBadminton] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: badminton ? 1 : 0,
        transform: `perspective(600px) rotateX(${badminton ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })

    const dispatch = useAppDispatch()
    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('sports'))
    }
    return (
        <motion.div
            exit={myExit} className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll items-center justify-center ">

            <div className='header-top'>
                <h1 className='title'>Badminton</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className='body-sides h-full '>
                <div className='mt-20 body-bg'>
                    <p>
                        I taught myself badminton by watching youtube videos and playing with better players.
                        During high school I taught kids at my community center and supervised drop ins.
                    </p>
                    <div className='flex flex-col md:flex-row gap-4' onClick={() => { setBadminton(state => !state) }}>
                        <img src="/images/badminton.png" alt="" className=' object-cover'/>
                        <img src="/images/badminton2.png" alt="" className='object-cover'/>
                           
                    </div>

                </div>
            </div>
        </motion.div >
    )
}
