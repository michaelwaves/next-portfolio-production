export const myExit = {
    y: '-100vw',
    opacity: 0,
    transition: {
        duration: 0.75,
        ease: 'easeInOut'

    }
}

export const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 100,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(0px at 40px 40px)",
        transition: {
            delay: 0,
            type: "spring",
            stiffness: 600,
            damping: 40
        }
    }
};