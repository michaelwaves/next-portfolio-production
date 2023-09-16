import { motion } from "framer-motion"
import { myExit } from "@/utils/FramerMotionAnimations"
import { useAppDispatch } from "@/redux/hooks";
import { toggleStatePopup } from "@/redux/closetSlice";

const popupVariants = {
    initial: {
        opacity: 0,
        y: -100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: 'easeOut'
        }
    },
}


export default function PopupClosetSans({ reduxProperty, children }: { reduxProperty: string, children: React.ReactNode }) {

    const dispatch = useAppDispatch()
    const handleClose = (e: any) => {
        e.stopPropagation()
        dispatch(toggleStatePopup(reduxProperty))
    }
    return (
        <motion.div
            key={reduxProperty}
            initial="initial"
            animate="animate"
            variants={popupVariants}
            exit={myExit}
            className="fixed top-0 w-full h-fit flex justify-center items-center">
            <div

                className="w-[clamp(400px,50vw,800px)] h-full p-4 bg-s-5 dark:bg-p-5 rounded-xl relative border-4 border-s-3 dark:border-p-3">
                <div className=" absolute top-2 right-2 z-50" onClick={e => handleClose(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="close-x">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="pr-4">
                    {children}
                </div>
            </div>

        </motion.div>
    )
}