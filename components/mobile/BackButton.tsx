import { motion } from "framer-motion";
import { AiOutlineArrowLeft, AiOutlineHome } from "react-icons/ai"
import Link from "next/link";

export default function BackButton() {
    return (
        <div className="w-full flex justify-start sm:hidden z-50 fixed bottom-4">
            <motion.div
                whileTap={{ scale: 0.9 }}
                className="bg-s-3 dark:bg-p-3 rounded-full p-2 w-fit ml-4"
            >      <Link href="/"><AiOutlineArrowLeft className="text-4xl w-12 h-12 text-white" /></Link>
            </motion.div>
        </div>
    )
}