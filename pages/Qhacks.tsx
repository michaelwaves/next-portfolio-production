"use client"
import Trail from '@/components/Trails'
import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/closetSlice'
import UnderLine from '@/components/UnderLine'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'

export default function Qhacks() {

    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)

    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('qhacks'))
    }
    return (
        <motion.div
            exit={myExit}
            className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll items-center justify-center ">
            <div className='header-top'>
                <h1 className='title'>QHacks</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className="tldr-box">
                <img src="/images/QHacksPicture.jpeg" alt="michael and the mayor of kingston and two friends in front of shiny Q H 2023 balloons" className="object-cover md:w-1/2 w-full" />
                <div className="flex flex-col space-y-4 items-center justify-center p-12 md:w-1/2">
                    <h2 className="tldr" onClick={() => setOpen(state => !state)}>TLDR</h2>
                    <div className="list-disc" onClick={() => setOpen(!open)}>
                        <Trail open={open}>
                            <span>Won Mayor’s Innovation Challenge</span>
                            <span>Fine-Tuned OpenAI model trained on Kingston's Website</span>
                            <span>Made new friends along the way</span>
                        </Trail>
                    </div>
                    <button onClick={() => window.open("https://devpost.com/software/kingsley-3qtkf1", "_blank")} className="tldr-button">
                        Checkout Project
                    </button>
                </div>
            </div>
            <div className='body-sides'>
                <div className=' body-bg'>
                    <h1 className='m-auto font-accent text-5xl'>
                        Introducing Kingsley
                    </h1>
                    <p>
                        Municipal websites can be challenging to navigate, especially for those with accessibility needs.
                        With this problem in mind, we designed and built an AI powered chatbot fine tuned on all pages from the City of Kingston Website, fittingly called Kingsley.

                    </p>
                    <img src="/images/kingsley.jpg" alt="" />
                    <h2 className="mt-10">How it Works</h2>
                    <ul className="list-disc list-inside">
                        <li>Kingsley uses a
                            <UnderLine text='GPT-3' href='https://openai.com/blog/openai-api/' />
                            model fine-tuned on data from the <UnderLine text="City of Kingston" href="https://www.cityofkingston.ca/" /> website.</li>
                        <li>The data was scraped using Beautiful Soup.</li>
                        <li>A
                            <UnderLine text='GloVe' href="https://www.kaggle.com/datasets/anindya2906/glove6b" />
                            dataset was used to find website links relevant to the user's question.</li>
                        <li>Jaccard similarity was used to find relevant text that specifically mentioned key words in the user's question.</li>
                        <li>Relevant texts were narrowed down and passed as part of the prompt to GPT-3 for an answer completion.</li>
                        <li>The website along with the voice functionality were created using React.</li>
                    </ul>
                    <h2 className="mt-10">Technologies Used</h2>
                    <ul className="list-disc list-inside">
                        <li>React</li>
                        <li>Flask</li>
                        <li>OpenAI</li>
                        <li>Python &#40;for webscraping&#41;</li>
                    </ul>


                </div>
            </div>
        </motion.div >
    )
}
