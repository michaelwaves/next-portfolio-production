import UnderLine from "@/components/UnderLine"
import Image from "next/image"
import { workExperiences, pageCategories, education, extracurriculars, projects, hackathons, hobbies } from "@/data/MobileData"
import { useState, useEffect } from "react"
import { setCookie, getCookie, hasCookie, deleteCookie } from "cookies-next"
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/mobile/Card";
import { Subtitle } from "@/components/mobile/Subtitle";
import { SocialMedia } from "@/components/mobile/SocialMedia";
import Footer from "@/components/Footer"
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setMobileIndex, getState } from "@/redux/controlsSlice";


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


export default function Mobile() {
    const [index, setIndex] = useState(0) //usestate for mobile index

    //redux for mobile index
    /* const index = useAppSelector(state=>getState(state).mobileIndex)
    const dispatch = useAppDispatch()
    const setIndex = (i: number) => {
        dispatch(setMobileIndex(i))
    } */

    //cookies for mobile index
    useEffect(() => {
        if (hasCookie("mobileIndex")) {
            const index = parseInt(getCookie("mobileIndex") as string)
            setIndex(index)
        } else {
            setCookie("mobileIndex", "0")
        }
    }, [])
    return (
        <div className="h-auto w-full">
            <div className="relative">
                <Image src="/images/room/3.png" alt="Michael's room" width={500} height={500} />
                <div className="w-full h-20 bg-gradient-to-t from-white absolute bottom-0"></div>
            </div>
            <div className='relative w-full h-full flex flex-col gap-4 md:gap-8'>
                <div className="p-4">
                    <p className="md:text-2xl text-lg">
                        Hi there. I&#39;m Michael, startup and tech enthusiast passionate about AI, Web3, and biotech. I&#39;m currently interning
                        at a clinical stage<UnderLine text="pharmaceutical startup" href="https://cloudbreakpharma.com/" />and building
                        a<UnderLine text="blockchain patent marketplace" href="https://trademint.org" />as part of the inaugural MLH Web3 Fellowship.
                        In my spare time I like to play badminton, cook tasty food, and build websites.
                        Welcome to my corner of the internet :&#41;
                    </p>
                    <p className="text-md mt-4">PS&#58; This site is even more awesome on desktop 🖥️ Check it out later :&#41;</p>
                </div>
                <SocialMedia />
                <nav className="nav-mobile">
                    <ul className="flex flex-row">
                        {pageCategories.map((item, i) => (
                            <li
                                key={item.title}
                                className={`nav-li ${i === index ? "selected" : ""}`}
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
            <Footer />
            <motion.div className="fixed bottom-4 right-4"
                whileTap={{ scale: 0.9 }}
            >
                <Link href="/chat">
                    <Image src="/images/svgs/chatright.svg" width={20} height={20} alt="Click to Chat" className="w-12 h-12" />
                </Link>
            </motion.div>
        </div>
    )
}