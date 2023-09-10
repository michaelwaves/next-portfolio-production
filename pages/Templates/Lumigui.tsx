"use client"
import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/closetSlice'
import UnderLine from '@/components/UnderLine'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'
import { useSpring, a } from '@react-spring/web'

export default function Lumigui() {
    const [badminton, setBadminton] = useState(false)
    const [pingpong, setPingpong] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: badminton ? 1 : 0,
        transform: `perspective(600px) rotateX(${badminton ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })

    const { transform: transform2, opacity: opacity2 } = useSpring({
        opacity: pingpong ? 1 : 0,
        transform: `perspective(600px) rotateX(${pingpong ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })

    const dispatch = useAppDispatch()
    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('lumigui'))
    }
    return (
        <motion.div
            exit={myExit} className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll items-center justify-center ">

            <div className='header-top'>
                <h1 className='w-2/3 text-5xl'>Lumigui</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className='body-sides'>
                <div className='mt-20 body-bg'>
                    <h1 className='m-auto font-accent text-5xl'>
                        Lumigui
                    </h1>
                    <p>
                        Lumigui was inspired by touchless faucets and greasy clinic ipads. We wanted to create a touchless interface for filling in medical forms. So we built a custom website in react, wrote a python autogui script, and designed an arduino board with five photoresistors.
                        Users could use five functions: next, previous, enter, delete, and activate voice typing. The photoresistors would detect the user's hand and trigger the autogui script to perform the corresponding action.
                        We also designed and 3D printed a custom box to make it look cool.
                        My friend and I stayed up until 6am building, testing, and filming our submission video
                    </p>
                    <div className='relative  h-[50vh] md:h-[60vh] lg:h-[80vh] w-auto ' onClick={() => { setBadminton(state => !state) }}>
                        <a.img src="/images/lumiguihand.jpg" alt="" className='absolute cursor-pointer object-cover'
                            style={{ opacity: opacity.to(o => 1 - o), transform }} />
                        <a.img src="/images/lumiguifunctions.jpg" alt="" className='absolute cursor-pointer object-cover'
                            style={{
                                opacity,
                                transform,
                                rotateX: '180deg',
                            }} />
                    </div>
                    <h1 className="mt-10 text-5xl font-accent mx-auto">Result</h1>
                    <p>
                        We ended up winning first place! There were a few hundred other hackers and their projects were all amazing,
                        so it was a shock when they announced it. We won a $400 amazon gift card.
                    </p>
                    <div className='relative  h-[50vh] md:h-[60vh] lg:h-[80vh] w-auto ' onClick={() => { setPingpong(state => !state) }}>
                        <a.img src="/images/lumiguiwin.jpg" alt="" className='absolute cursor-pointer object-cover'
                            style={{ opacity: opacity2.to(o => 1 - o), transform: transform2 }} />
                        <a.img src="/images/lumigui.jpg" alt="" className='absolute cursor-pointer object-cover'
                            style={{
                                opacity: opacity2,
                                transform: transform2,
                                rotateX: '180deg',
                            }} />
                    </div>
                </div>
            </div>
        </motion.div >
    )
}
