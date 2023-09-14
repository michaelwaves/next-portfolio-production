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
        dispatch(toggleState('vocalverse'))
    }
    return (
        <motion.div
            exit={myExit}
            className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll items-center justify-center ">
            <div className='header-top'>
                <h1 className='w-2/3 text-5xl title'>The VocalVerse</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className="tldr-box">
                <Image width={1000} height={1000} src="/images/vocalverse/vocalverse.png" alt="vocalverse landing page, two women in front of galaxy of stars, anime style" className="object-cover md:w-1/2 w-full" />
                <div className="flex flex-col space-y-4 items-center justify-center p-12 md:w-1/2">
                    <h2 className="tldr" onClick={() => setOpen(state => !state)}>TLDR</h2>
                    <div className="list-disc" onClick={() => setOpen(!open)}>
                        <Trail open={open}>
                            <span>Chat with your favorite celebrities and characters</span>
                            <span>Realistic text to speech</span>
                            <span>Powered by OpenAI, ElevenLabs, and Firebase</span>
                        </Trail>
                    </div>
                    <button onClick={() => window.open("https://vocalverse.vercel.app/", "_blank")} className="tldr-button">
                        Checkout Project
                    </button>
                </div>
            </div>
            <div className='body-sides'>
                <div className=' body-bg'>
                    <h1 className='m-auto font-accent text-5xl'>
                        Welcome to the VocalVerse
                    </h1>
                    <p>
                        AI language models are currenlty text based. We wanted to create a novel way to interact with state of the art language models: through voice.
                        The VocalVerse is a platform where users can find voice models and chat with their favorite characters using realistic text to speech.
                    </p>
                    <div className='w-full flex items-center flex-col'>
                        <div className='bg-s-3 w-full rounded-t-xl flex items-center justify-center'>
                            <audio src="/audio/duaportfolio.mp3" controls></audio>
                        </div>
                        <Image width={1000} height={1000} src="/images/vocalverse/duaportfolio.png" alt="dua sings" />
                        <i>Dua&#39;s singing abilities could use some work</i>

                    </div>
                    <h2 className="mt-10">How it Works</h2>
                    <ul className="list-disc list-inside">
                        <li>The chat functionality is powered by
                            <UnderLine text="OpenAI's API" href='https://openai.com/blog/openai-api' />
                            and
                            <UnderLine text="Vercel's AI SDK" href='https://vercel.com/blog/introducing-the-vercel-ai-sdk' />
                        </li>
                        <li>
                            <UnderLine text='The Elevenlabs API' href='https://openai.com/blog/dall-e-api-now-available-in-public-beta' />
                            is used to generate realistic, fine tuned audio responses</li>
                        <li>Chats are then saved to <UnderLine text="Firebase" href="https://firebase.google.com/" /></li>

                    </ul>
                    <h2 className="mt-10">Technologies Used</h2>
                    <ul className="list-disc list-inside">
                        <li>React</li>
                        <li>OpenAI API</li>
                        <li>Firebase</li>
                        <li>ElevenLabs API</li>
                    </ul>

                </div>
            </div>
        </motion.div >
    )
}
