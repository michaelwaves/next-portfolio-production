"use client"
import { useAppDispatch } from '@/redux/hooks'
import { toggleState } from '@/redux/deskSlice'
import { motion, AnimatePresence } from 'framer-motion'
import { useSpring } from '@react-spring/three'
import { myExit } from '@/utils/FramerMotionAnimations'
import { Books } from "@/components/models/Books";
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react'
import { bookData } from '@/data/BookData'
import MoonLoader from 'react-spinners/MoonLoader'
import { Html } from '@react-three/drei'


const DescriptionCard = (book: any) => {
    return (
        <motion.div className='flex flex-col gap-8 p-4'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
        >
            <h1 className='title'>{book.title}</h1>
            <h2 className='subtitle'>{book.author}</h2>
            <div className='bg-s-5 dark:bg-p-5 rounded-xl p-4'>
                <p className='font-body text-xl md:text-2xl'>{book.about}</p>
            </div>
        </motion.div>
    )
}

export default function Book() {


    const [index, setIndex] = useState(0)
    const bookComponents = bookData.map((book, i) => {
        return (
            (i === index) && <DescriptionCard {...book} key={i} />)
    })

    const { rotation } =
        useSpring({
            rotation: -index * Math.PI / 3,
        })

    const indexButtons = [0, 1, 2, 3, 4, 5].map((i) => (
        <button
            key={i}
            className="w-4 h-4 text-xl font-body rounded-full bg-s-3 dark:bg-p-3"
            onClick={() => setIndex(i)}
        >
        </button>
    ))

    const incrementIndex = () => {
        setIndex((index + 1) % 6)
    }


    const dispatch = useAppDispatch()

    const handleClick = (e: any) => {
        e.stopPropagation()
        dispatch(toggleState('book'))
    }
    return (
        <motion.div
            exit={myExit}
            className="text-xl md:text-2xl fixed top-0 left-0 z-10 w-full h-full overflow-y-scroll scrollbar items-center justify-center bg-white dark:bg-black" >
            <div className='header-top'>
                <h1 className='w-2/3 text-5xl font-body title'>Cool Books</h1>
                <div className='w-1/3 flex justify-end z-20' onClick={(e) => handleClick(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className='header-bg'></div>
            </div>
            <div className='w-full h-full bg-white dark:bg-black flex flex-col md:flex-row mt-20'>
                <div className='w-full md:w-[clamp(400px,30vw,500px)] h-fit'>
                    <div className='md:w-[clamp(400px,30vw,500px)] w-full h-[500px] bg-s-3 dark:bg-p-3'
                        onClick={incrementIndex}
                    >
                        <Canvas>
                            <Suspense fallback={
                                <Html className='w-full h-full flex items-center justify-center'>

                                    <MoonLoader
                                        size={100}
                                        color={"#ffffff"}
                                        loading={true}
                                        className='mx-auto' />


                                </Html>
                            }>
                                <Books rotation-y={rotation} index={index} />
                            </Suspense>
                        </Canvas>

                    </div>
                    <div className='flex flex-row gap-2 mx-auto m-2 w-fit'>
                        {indexButtons}
                    </div>
                </div>
                <AnimatePresence>
                    {bookComponents}
                </AnimatePresence>
            </div>
        </motion.div >
    )
}