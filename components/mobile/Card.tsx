import { motion } from "framer-motion"
import Link from "next/link"

export const Card = (item: any) => {
    return (
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
    )
}

