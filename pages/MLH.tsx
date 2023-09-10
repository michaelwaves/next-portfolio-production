"use client"
import Trail from '@/components/Trails'
import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/deskSlice'
import UnderLine from '@/components/UnderLine'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'

export default function MLH() {

    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)

    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('mlh'))
    }

    return (
        <motion.div
            exit={myExit}
            className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll items-center justify-center ">
            <div className='header-top'>
                <h1 className='title'>MLH Fellowship</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className="tldr-box">
                <img src="/images/trademint/upload.png" alt="profile upload page" className="object-cover md:w-1/2 w-full" />
                <div className="flex flex-col space-y-4 items-center justify-center p-12 md:w-1/2">
                    <h2 className="tldr" onClick={() => setOpen(state => !state)}>TLDR</h2>
                    <div className="list-disc" onClick={() => setOpen(!open)}>
                        <Trail open={open}>
                            <span>Won the MLHxNEAR Web3 Build Hackathon</span>
                            <span>Building a patent marketplace on the NEAR Blockchain</span>
                            <span>Learned product development, responsive frontend design, and smart contract programming</span>
                        </Trail>
                    </div>
                    <button onClick={() => window.open("trademint.org", "_blank")} className="tldr-button">
                        Checkout Project
                    </button>
                </div>
            </div>
            <div className='body-sides'>
                <div className=' body-bg'>
                    <h1 className='m-auto font-accent text-5xl'>
                        NFTs for Patents
                    </h1>
                    <p>
                        With my friends William and Jack, I won the Web3 Build Hackathon with a blockchain-based patent marketplace and was accepted into the inaugural Web3 MLH incubator fellowship.
                        It was a 12-week, intensive Web3 and product development training camp sponsored by
                        <UnderLine text="Major League Hacking" href="https://mlh.io/" />
                        and the
                        <UnderLine text="NEAR" href="https://near.foundation/" />
                        Foundation.
                    </p>
                    <img src="/images/mlh2.png" alt="" />
                    <h2 className="mt-10">Technical Skills</h2>
                    <p>I built the entire frontend and Web2 backend of the marketplace using React, TypeScript, and Firebase.Most Web3 decentralized apps are either partially on Web2 or duplicate their data in traditional databases. This is to provide a fast user experience, while still enjoying the benefits of blockchain. I also learned how to build an
                        <UnderLine text="NFT Marketplace" href="https://docs.near.org/tutorials/nfts/js/introduction" />
                        with minting and transferring features, adhering to the <UnderLine text="Ethereum ERC-721 Standard" href="https://eips.ethereum.org/EIPS/eip-721"/>. </p>
                    <h2 className="mt-10">Business Skills</h2>
                    <p>
                        Through office hours with the NEAR team, I learned about SWOT analysis, go-to-market plans, product roadmaps, and minimum viable products. I created user flow diagrams, design systems, and prototypes in
                        <UnderLine text="Figma" href="https://www.figma.com/file/Y5A7yUVdqrenLUjPH92S2E/Flashcard?type=design&node-id=0-1&mode=design&t=Fs21O6UM1FSPjHBA-0" />
                        .
                    </p>
                </div>
            </div>
        </motion.div >
    )
}
