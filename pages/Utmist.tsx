"use client"
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/deskSlice'
import UnderLine from '@/components/UnderLine'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'
import Image from 'next/image'

export default function Utmist() {

    const dispatch = useAppDispatch()
    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('utmist'))
    }
    return (
        <motion.div
            exit={myExit} className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll items-center justify-center ">

            <div className='header-top'>
                <h1 className='title'>UTMIST</h1>
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
                        Univerity of Toronto Machine Intelligence Student Team
                    </h1>
                    <p>
                        I was an Event Director for the
                        <UnderLine text='University of Toronto Machine Intelligence Student Team' href={"https://utmist.gitlab.io/"} />
                        As someone with both a business and tech background, I helped them plan technical events like hackathons.
                    </p>
                    <Image width={1000} height={1000} src="/images/utmist.jpg" alt="" width={600} height={600} className='m-auto' />
                    <h1 className="mt-10 text-5xl font-accent mx-auto">AI Hackathon</h1>
                    <p>I helped plan an AI hackathon and taught a Python Tweet Classification Workshop </p>
                </div>
            </div>
        </motion.div >
    )
}
