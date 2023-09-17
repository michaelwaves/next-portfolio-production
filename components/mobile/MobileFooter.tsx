import { motion } from "framer-motion"
import { FiMail } from "react-icons/fi"
import MobileLightSwitch from "./MobileLightSwitch"


export default function MobileFooter() {
    return (
        <div className="w-full flex flex-col items-center justify-center h-40">
            <p className="font-body">Made with 💖 and NextJS Typescript &#43; Redux</p>
            <motion.a href="mailto:michaelyu713705@gmail.com" target="_blank" rel="noreferrer" className="text-2xl text-s-3 dark:text-p-3 flex flex-row gap-2">
                <FiMail />
                <p>michaelyu713705@gmail.com</p>
            </motion.a>
            <div className="">
                <MobileLightSwitch />
            </div>
        </div>
    )
}