"use client"
import Trail from '@/components/Trails'
import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/closetSlice'
import UnderLine from '@/components/UnderLine'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'
import Image from 'next/image'

export default function Tailor() {

    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)

    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('tailor'))
    }
    return (
        <motion.div
            exit={myExit}
            className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll scrollbar items-center justify-center ">
            <div className='header-top'>
                <h1 className='title'>Tailor</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className="tldr-box">
                <Image width={1000} height={1000} src="/images/tailor/tailor2.jpg" alt="Tailor main interface" className="object-cover md:w-1/2 w-full" />
                <div className="flex flex-col space-y-4 items-center justify-center p-12 md:w-1/2">
                    <h2 className="tldr" onClick={() => setOpen(state => !state)}>TLDR</h2>
                    <div className="list-disc" onClick={() => setOpen(!open)}>
                        <Trail open={open}>
                            <span>Fun, madlibs style prompt generator for AI image generation</span>
                            <span>Creates images and sends them to your phone</span>
                            <span>Won Best Domain Name and Best use of Twilio at UOttaHack 5</span>
                        </Trail>
                    </div>
                    <button onClick={() => window.open("https://devpost.com/software/tailor-s529oy", "_blank")} className="tldr-button">
                        Checkout Project
                    </button>
                </div>
            </div>
            <div className='body-sides'>
                <div className=' body-bg'>
                    <h1 className='m-auto font-accent text-5xl'>
                        Tailor made Prompts
                    </h1>
                    <p>
                        With AI image generation being all the rage, we wanted to make a fun way to generate prompts for AI image generation.
                        We built a website where users input words and styles and receive a custom Dalle prompt, that we submit to the API.
                        Users can then save the image or have it sent to their phone number.
                    </p>
                    <Image width={1000} height={1000} src="/images/tailor/tailor3.jpg" alt="woman with dog image generated, light blue background" />
                    <h2 className="mt-10">How it Works</h2>
                    <ul className="list-disc list-inside">
                        <li>First, the user inputs words as prompts</li>
                        <li>Then, Tailor uses
                            <UnderLine text='Dalle API' href='https://openai.com/blog/dall-e-api-now-available-in-public-beta' />
                            to create images</li>
                        <li>We used  tailwindcss for styling</li>
                        <li>The output image was sent to the user&#39;s phone using <UnderLine text='Twilio' href="https://www.twilio.com/en-us" /></li>

                    </ul>
                    <h2 className="mt-10">Technologies Used</h2>
                    <ul className="list-disc list-inside">
                        <li>React</li>
                        <li>Dalle API</li>
                        <li>TailwindCSS</li>
                        <li>Twilio</li>
                    </ul>
                    {/*  <h2>Result</h2>
                    <p>We won Best Domain Name at UOttaHack 5, and made some new friends who also go to UofT</p>
                    <img src="/images/tailor/uottahacksmall.jpg" alt="" /> */}
                </div>
            </div>
        </motion.div >
    )
}
