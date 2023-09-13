import UnderLine from "@/components/UnderLine"
import Image from "next/image"
import { workExperiences, pageCategories } from "@/data/MobileData"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion";

const workComponents = workExperiences.map((item, i) => (
    <motion.div key={item.title} className="p-4"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
    >
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
                <p className="text-lg font-bold">{item.title}</p>
                <p className="text-sm">{item.company}</p>
            </div>
            <p className="text-xs">{item.date}</p>
        </div>
        <p className="text-sm">{item.description}</p>
    </motion.div>
))

export default function Mobile() {
    const [index, setIndex] = useState<number>(0)
    return (
        <div className="h-auto w-full">
            <div className="relative">
                <Image src="/images/room/3.png" alt="Michael's room" width={500} height={500} />
                <div className="w-full h-20 bg-gradient-to-t from-white absolute bottom-0"></div>
            </div>
            <div className='relative w-full h-full flex flex-col gap-4 md:gap-8'>
                <div className="p-4">
                    <p className="md:text-2xl text-lg">
                        Hi there. I&#39;m Michael, startup and tech enthusiast passionate about AI, Web3, and biotech. I'm currently interning
                        at a clinical stage<UnderLine text="pharmaceutical startup" href="https://cloudbreakpharma.com/" />and building
                        a<UnderLine text="blockchain patent marketplace" href="https://trademint.org" />as part of the inaugural MLH Web3 Fellowship.
                        In my spare time I like to play badminton, cook tasty food, and build websites.
                        Welcome to my corner of the internet :&#41;
                    </p>
                </div>
                <nav className="nav-mobile">
                    <ul className="flex flex-row">
                        {pageCategories.map((item, i) => (
                            <li
                                key={item.title}
                                className={`nav-li ${i === index ? "selected" : ""}`}
                                onClick={() => setIndex(i)}
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
                    <div className="h-80">
                        {index === 0 && workComponents}
                    </div>
                </AnimatePresence>
            </div>
        </div>
    )
}