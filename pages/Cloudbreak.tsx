"use client"
import Trail from '@/components/Trails'
import { useState } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/deskSlice'
import UnderLine from '@/components/UnderLine'
import { motion } from 'framer-motion'
import { myExit } from '@/utils/FramerMotionAnimations'
import Image from 'next/image'

export default function Cloudbreak() {

    const dispatch = useAppDispatch()
    const [open, setOpen] = useState(false)

    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('cloudbreak'))
    }
    return (
        <motion.div
            exit={myExit} className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll scrollbar  items-center justify-center ">
            <div className='header-top'>
                <h1 className='title'>Cloudbreak</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className="tldr-box">
                <Image width={1000} height={1000} src="/images/cloudbreak/cloudbreaklanding.png" alt="landing page" className="object-cover md:w-1/2 w-full" />
                <div className="flex flex-col space-y-4 items-center justify-center p-12 md:w-1/2">
                    <h2 className="tldr" onClick={() => setOpen(state => !state)}>TLDR</h2>
                    <div className="list-disc" onClick={() => setOpen(!open)}>
                        <Trail open={open}>
                            <span>Helped IPO a $1 billion pharmaceutical company on the Hong Kong Stock Exchange.</span>
                            <span>Assisted accounting, finance, and marketing</span>
                            <span>Managed the company&#39;s Wordpress site and LinkedIn page with another intern</span>
                        </Trail>
                    </div>
                    <button onClick={() => window.open("https://cloudbreakpharma.com/", "_blank")}
                        className="tldr-button">
                        Checkout Company
                    </button>
                </div>
            </div>
            <div className='body-sides'>
                <div className=' body-bg'>
                    <h1 className='m-auto font-accent  text-2xl md:text-4xl'>
                        Seeing Life Better Through Medicine
                    </h1>
                    <p>
                        I&#39;m an intern at the Hong Kong Finance Office of CloudBreak Pharma, a pharmaceutical company developing potential treatments for pterygium and other eye diseases.
                        I learned a lot about the America drug development process and the Hong Kong finance and biotech ecosystem.
                    </p>
                    <Image width={1000} height={1000} src="/images/cloudbreak/cbt009.png" alt="eyedrop bottle on blue box that says CBT-009, beside a sign saying CBT-009 is approved for clinical trials" />
                    <div className='flex flex-col items-center justify-center m-auto'>
                        <h2>Things I did</h2>
                        <ul className='list-disc'>
                            <li>Managed the company Wordpress, SEO optimization</li>
                            <li>Prepared exchange rate hedging memos and financial models</li>
                            <li>DSM Verification and information requests</li>
                            <li>Created videos and media for <UnderLine text="LinkedIn" href="https://www.linkedin.com/company/cloudbreak-pharma/" /> posts</li>
                            <li>Verified consistency across shareholding spreadsheets</li>
                            <li>Reconciled budgets</li>
                            <li>Organized the company sharepoint</li>
                            <li>Translated documents between English and Chinese</li>
                        </ul>
                    </div>
                </div>

            </div>
        </motion.div >
    )
}
