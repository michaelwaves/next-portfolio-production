"use client"
import Trail from '@/components/Trails'
import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/closetSlice'
import UnderLine from '@/components/UnderLine'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'
import Image from 'next/image'

export default function CoverMeGPT() {

    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)

    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('covermegpt'))
    }
    return (
        <motion.div
            exit={myExit}
            className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll scrollbar  items-center justify-center ">
            <div className='header-top'>
                <h1 className='w-2/3 text-5xl title'>CoverMeGPT</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className="tldr-box">
                <Image width={1000} height={1000} src="/images/covermegpt/landingdark.png" alt="dark mode landing page" className="object-cover md:w-1/2 w-full" />
                <div className="flex flex-col space-y-4 items-center justify-center p-12 md:w-1/2">
                    <h2 className="tldr" onClick={() => setOpen(state => !state)}>TLDR</h2>
                    <div className="list-disc" onClick={() => setOpen(!open)}>
                        <Trail open={open}>
                            <span>Custom cover letter generation based on resume and job requirements</span>
                            <span>Built with the OpenAI API, Firebase, and React</span>
                            <span>Pdf Download</span>
                        </Trail>
                    </div>
                    <button onClick={() => window.open("www.covermegpt.com", "_blank")} className="tldr-button">
                        Checkout Project
                    </button>
                </div>
            </div>
            <div className='body-sides'>
                <div className=' body-bg'>
                    <h1 className='m-auto font-accent text-5xl'>
                        Cover Letters Made Easy
                    </h1>
                    <p>
                        Cover letters are annoying. You have to write a new one for every job, and they all sound the same.
                        Why not have AI do it for you? We built a custom website in React, and used the OpenAI API to generate cover letters based on your resume and the job description.
                        We also used firebase to store user data and authentication, and you can save multiple profiles to group related experiences.
                    </p>
                    <Image width={1000} height={1000} src="/images/covermegpt/profile.png" alt="profile page" />
                    <h2 className="mt-10">How it Works</h2>
                    <ul className="list-disc list-inside">
                        <li>First, create a profile</li>
                        <li>Next, paste in the job requirements</li>
                        <li>Cover letters are generated with
                            <UnderLine text="OpenAI's GPT-3.5 Models" href='https://platform.openai.com/docs/models' />
                        </li>
                        <li>Custom profiles are stored using <UnderLine text='Firebase' href="https://firebase.google.com/" /></li>
                        <li>Generated cover letters can be tweaked in a text editor and downloaded as pdf</li>
                    </ul>
                    <h2 className="mt-10">Technologies Used</h2>
                    <ul className="list-disc list-inside">
                        <li>React</li>
                        <li>OpenAI</li>
                        <li>Firebase</li>
                        <li>TailwindCSS</li>
                    </ul>

                </div>
            </div>
        </motion.div >
    )
}
