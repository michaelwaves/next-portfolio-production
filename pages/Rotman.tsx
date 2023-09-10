"use client"
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/deskSlice'
import UnderLine from '@/components/UnderLine'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'

export default function Rotman() {

    const dispatch = useAppDispatch()
    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('education'))
    }
    return (
        <motion.div
            exit={myExit} className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll items-center justify-center ">

            <div className='header-top'>
                <h1 className='title'>Education</h1>
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
                        University
                    </h1>
                    <p>
                        I completed a Management Specialist Degree with a Focus in Finance and a Minor in Economics at
                        <UnderLine text='Rotman Commerce' href={"https://rotmancommerce.utoronto.ca/"} />
                        at the University of Toronto.  With lots of hard work  &#40;and some help from IB transfer credits &#41; I graduated a year early from my four-year program.
                    </p>
                    <img src="/images/rotman3.jpg" alt="" />
                    <h1 className="mt-10 text-5xl font-accent mx-auto">High School</h1>
                    <p>I attended Bayview Secondary School in Richmond Hill, Canada, and graduated from the International Baccalaureate program with a 42/45. </p>
                </div>
            </div>
        </motion.div >
    )
}
