import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const SocialMedia = () => {
    return (
        <div className='flex flex-row justify-evenly w-full'>
            <motion.a href="https://www.instagram.com/michael713705/" target="_blank" rel="noreferrer" className="text-2xl text-s-3 dark:text-p-3">
                <BsInstagram />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/nicetomeetyu/" target="_blank" rel="noreferrer" className="text-2xl text-s-3 dark:text-p-3">
                <BsLinkedin />
            </motion.a>
            <motion.a href="mailto:michaelyu713705@gmail.com" target="_blank" rel="noreferrer" className="text-2xl text-s-3 dark:text-p-3">
                <FiMail />
            </motion.a>
        </div>
    )
}