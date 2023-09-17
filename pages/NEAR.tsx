"use client"
import Trail from '@/components/Trails'
import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/closetSlice'
import UnderLine from '@/components/UnderLine'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'
import Image from 'next/image'

export default function NEAR() {

    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)

    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('near'))
    }
    return (
        <motion.div
            exit={myExit}
            className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll md:scrollbar items-center justify-center ">
            <div className='header-top'>
                <h1 className='title'>NEAR IP</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className="tldr-box">
                <Image width={1000} height={1000} src="/images/NEAR/near2.jpg" alt="homepage of patent marketplace" className="object-cover md:w-1/2 w-full" />
                <div className="flex flex-col space-y-4 items-center justify-center p-12 md:w-1/2">
                    <h2 className="tldr" onClick={() => setOpen(state => !state)}>TLDR</h2>
                    <div className="list-disc" onClick={() => setOpen(!open)}>
                        <Trail open={open}>
                            <span>Web3 patent marketplace based on NEAR blockchain</span>
                            <span>Learned smart contract development and a bit of Rust</span>
                            <span>One of top 4 teams selected to participated in the MLH Web3 Fellowship</span>
                        </Trail>
                    </div>
                    <button onClick={() => window.open("https://devpost.com/software/nearip", "_blank")} className="tldr-button">
                        Checkout Project
                    </button>
                </div>
            </div>
            <div className='body-sides'>
                <div className=' body-bg'>
                    <h1 className='m-auto font-accent text-5xl'>
                        Blockchain Patents
                    </h1>
                    <p>
                        Every year, an estimated $4 billion of patents or applications expire in the US. We wanted to help solve this problem by making a
                        patent marketplace based on the NEAR blockchain. This made peer to peer transactions possible, and made ownership transparent and unhackable
                    </p>
                    <Image width={1000} height={1000} src="/images/NEAR/near.jpg" alt="near" />
                    <h2 className="mt-10">How it Works</h2>
                    <ul className="list-disc list-inside">
                        <li>NEARIP uses the
                            <UnderLine text='NEAR Blockchain' href='https:near.org' />
                            to store patent data like inventors, assignee, name, and links to offchain file storage</li>
                        <li>We used parcel and tailwindcss for the frontend</li>
                        <li>Firebase was used to store pdfs for the patents, since on chain storage is limited.</li>
                    </ul>
                    <Image width={1000} height={1000} src="/images/NEAR/nearstorage.jpg" alt="near" />
                    <h2 className="mt-10">Technologies Used</h2>
                    <ul className="list-disc list-inside">
                        <li>React</li>
                        <li>NEAR Protocol</li>
                        <li>Parcel</li>
                        <li>Firebase</li>
                    </ul>

                </div>
            </div>
        </motion.div >
    )
}
