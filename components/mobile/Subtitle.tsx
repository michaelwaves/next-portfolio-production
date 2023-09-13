import { motion } from "framer-motion";
import Link from "next/link";

export const Subtitle = ({ text }: { text: string }) => {
    return (
        <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-xl ml-4">{text}</motion.p>
    )
}