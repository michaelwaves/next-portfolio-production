import ControlPanel from "@/components/ControlPanel"
import Image from "next/image"
import { workExperiences, pageCategories, education, extracurriculars, projects, hackathons, hobbies } from "@/data/MobileData"
import { useState, useEffect } from "react"
import { setCookie, getCookie, hasCookie, deleteCookie } from "cookies-next"
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/mobile/Card";
import { Subtitle } from "@/components/mobile/Subtitle";
import { SocialMedia } from "@/components/mobile/SocialMedia";
import MobileFooter from "@/components/mobile/MobileFooter"
import About from "@/components/About"
import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { getState, setHovered } from "@/redux/controlsSlice"
import CustomCursor from "@/components/CustomCursor"
import { MoonLoader } from "react-spinners"
import { myExit } from "@/utils/FramerMotionAnimations"


const workComponents = workExperiences.map((item, i) => (
    <motion.div key={item.title} className="p-4"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
    >
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
                <Link href={item.href}><p className="text-lg font-bold text-s-3 dark:text-p-3">{item.title}</p></Link>
                <p className="text-sm">{item.company}</p>
            </div>
            <p className="text-xs">{item.date}</p>
        </div>
        <p className="text-sm">{item.description}</p>
    </motion.div>
))

const educationComponents = education.map((item, i) => (
    <Card key={item.title} {...item} />
))

const extracurricularComponents = extracurriculars.map((item, i) => (
    <Card key={item.title} {...item} />
))

const projectComponents = projects.map((item, i) => (
    <Card key={item.title} {...item} />
))

const hackathonComponents = hackathons.map((item, i) => (
    <Card key={item.title} {...item} />
))

const hobbyComponents = hobbies.map((item, i) => (
    <Card key={item.title} {...item} />
))


export default function Mobile({ }) {
    const [index, setIndex] = useState(0) //usestate for mobile index
    const [isDark, setIsDark] = useState<boolean | null>(null)
    const controlsState = useAppSelector(getState)
    const dispatch = useAppDispatch()
    //cookies for mobile index
    useEffect(() => {
        if (hasCookie("mobileIndex")) {
            const index = parseInt(getCookie("mobileIndex") as string)
            setIndex(index)
        } else {
            setCookie("mobileIndex", "0")
        }
    }, [controlsState.mobileIndex])

    useEffect(() => {
        if (getCookie("isDark") === "true") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
        setIsDark(getCookie("isDark") === "true")
    }, [controlsState.isDark])


    return (
        <div className="cursor-none">
            <AnimatePresence>
                {isDark != null ?
                    <div className={`h-auto w-full dark:bg-black`}>
                        <div className="relative">
                            <Image src="/images/room/3.png" alt="Michael's room" width={500} height={500}
                                onMouseEnter={() => dispatch(setHovered("hover"))} onMouseLeave={() => dispatch(setHovered("unhover"))} className="w-full h-full" />
                            <div className="w-full h-20 bg-gradient-to-t from-white absolute bottom-0 dark:bg-gradient-to-t dark:from-black"></div>
                        </div>
                        <div className='relative w-full h-full flex flex-col gap-4 md:gap-8'>
                            <div className="p-4">
                                <About />
                                <p className="text-md mt-4">PS&#58; This site is way more awesome on desktop 🖥️</p>
                                <p> Check it out later :&#41;</p>
                            </div>
                            <SocialMedia />

                            <nav className="nav-mobile dark:bg-black">
                                <ul className="flex flex-row">
                                    {pageCategories.map((item, i) => (
                                        <li
                                            key={item.title}
                                            className={`nav-li dark:bg-black ${i === index ? "selected" : ""}`}
                                            onClick={() => { setIndex(i), setCookie("mobileIndex", i.toString()) }}
                                        >
                                            {`${item.title}`}
                                            {i === index ? (
                                                <motion.div className="nav-underline" layoutId="underline" />
                                            ) : null}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <AnimatePresence mode="wait">
                                <div className="min-h-80 h-auto">
                                    {index === 0 && workComponents}
                                    {index === 1 &&
                                        <div>
                                            {educationComponents}
                                            <Subtitle text="Extracurriculars" />
                                            {extracurricularComponents}
                                        </div>}
                                    {index === 2 &&
                                        <div>
                                            {projectComponents}
                                            <Subtitle text="Hackathons" />
                                            {hackathonComponents}
                                        </div>}
                                    {index === 3 && hobbyComponents}
                                </div>
                            </AnimatePresence>
                        </div>
                        <MobileFooter />
                        <motion.div className="fixed bottom-16 right-4"
                            whileTap={{ scale: 0.9 }}
                        >
                            <Link href="/chat">
                                <Image src="/images/svgs/chatright.svg" width={20} height={20} alt="Click to Chat" className="w-12 h-12 dark:fill-white" />
                            </Link>
                        </motion.div>

                    </div>
                    :
                    <motion.div className="w-full h-screen flex items-center justify-center bg-black"
                        exit={{ opacity: 0 }}
                    >
                        <MoonLoader size={100} color={"#F3A705"} loading={true} className='mx-auto my-auto' />
                    </motion.div>
                }

            </AnimatePresence>
            <CustomCursor />
        </div>
    )
}

