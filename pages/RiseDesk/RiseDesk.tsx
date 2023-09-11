"use client"
import Trail from '@/components/Trails'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { toggleState } from '@/redux/deskSlice'
import UnderLine from '@/components/UnderLine'
import ColorSelector from './ColorSelector'
import { Desk } from '../../components/models/RiseDeskModel'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { myExit } from '@/utils/FramerMotionAnimations'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function RiseDesk() {

    const dispatch = useAppDispatch()
    const deskColor = useAppSelector((state) => state.desk.deskColor)

    const [open, setOpen] = useState(false)

    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('riseDesk'))
    }
    return (
        <motion.div
            exit={myExit}
            className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll block items-center justify-center ">
            <div className='header-top'>
                <h1 className='title'>RiseDesk</h1>
                <div className='w-1/3 flex justify-end' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className="tldr-box">
                <div className="object-cover md:w-1/2 w-full h-[500px]">
                    <div className='fixed z-10'>
                        <ColorSelector colors={[
                            "#323353",
                            "#484a77",
                            "#4d65b4",
                            "#4d9be6",
                            "#8fd3ff"]} />
                    </div>
                    <Canvas>

                        <ambientLight intensity={3} />
                        <pointLight position={[0, 0, 0]} intensity={15} color={"blue"} />
                        <pointLight position={[0, 0, 0]} intensity={1} color={"white"} />
                        <Desk color={deskColor} scale={[12, 12, 12]} rotation={[0, Math.PI / 2, 0]} position={[0, -1, -1]} />
                        <OrbitControls></OrbitControls>
                    </Canvas>
                </div>
                <div className="flex flex-col space-y-4 items-center justify-center p-12 md:w-1/2">
                    <h2 className="tldr" onClick={() => setOpen(state => !state)}>TLDR</h2>
                    <div className="list-disc" onClick={() => setOpen(!open)}>
                        <Trail open={open}>
                            <span>Created 3D models for Shopify Store</span>
                            <span>Made 3D animated assembly videos to reduce returns</span>
                            <span>Prepared pitch video for hardware accelerator program</span>
                        </Trail>
                    </div>
                    <button onClick={() => window.open("https://www.youtube.com/playlist?list=PLCZvYDiSAKvwclMxxu2A68QcFRDjwtmpd", "_blank")} className="tldr-button">
                        Checkout Project
                    </button>
                </div>
            </div>
            <div className={`w-full`} style={{ background: deskColor as string }}>
                <div className=' body-bg'>
                    <h1 className='m-auto font-accent text-5xl'>
                        My first job
                    </h1>
                    <p>
                        My first internship was at RiseDesk, a Toronto-based furniture e-commerce company.
                        My main role was creating 3D models of their products to upload to their Shopify page. I learned a lot about e-commerce, SEO, and optimizing 3D models for websites.
                    </p>

                    <h2 className="mt-10">Making users happy</h2>
                    <p >
                        Most of our products came from China, so the instructions were in Chinese or non-existent. To help fix this problem, I created
                        <UnderLine text='assembly videos' href='https://www.youtube.com/watch?v=2OwpGnqiKz4&list=PLCZvYDiSAKvwclMxxu2A68QcFRDjwtmpd&index=1' />
                        , which helped reduce returns and kept our customers happy.
                    </p>
                    <h2 className="mt-10">The pitch</h2>
                    <p>
                        An exciting project we worked on was a
                        <UnderLine text='smart chair' href='https://www.youtube.com/watch?v=LH6Y-Ay06Yw' />
                        with sensors to track sitting health and posture. I prepared marketing materials and a video pitch for a
                        <UnderLine text='hardware startup accelerator' href='https://www.venturelab.ca/' />
                        . Although we eventually sunset the project, it was a great learning experience.
                    </p>
                    <Image width={1000} height={1000} src="/images/risehealth.png" alt="futuristic chair on blue plartform of rotating gears, rish health in white font" />


                </div>
            </div>
        </motion.div >
    )
}
