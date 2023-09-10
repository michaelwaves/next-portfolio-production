'use client'

interface InsetButtonProps {
    title?: string;
    href?: string;
    className?: string;
    nextLink?: boolean;
    onClick: (e?: any) => void;
    children?: any;
}

export default function InsetButton({ onClick, className, children, title = "Button" }: InsetButtonProps) {
    return (
        <div className={`font-heading relative w-fit h-fit overflow-hidden pb-1 rounded-xl ${className}`}>
            <button
                onClick={onClick}
                className={`text-white hover:translate-y-2 transition-all duration-75 bg-s-3 dark:bg-p-3 dark:active:bg-p-5 rounded-xl p-2 active:bg-s-5 active:translate-y-4`}>
                {children ? children : <h1>{title}</h1>}
            </button>
            <div className={`bg-s-1 dark:bg-p-1 absolute top-0 left-0 rounded-xl mt-2 w-full h-full -z-10`} />
        </div>
    )
}