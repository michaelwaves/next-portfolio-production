export default function UnderLine({ text, href }: { text: string, href: string }) {
    return (
        <>
            &nbsp;
            <span className='w-fit h-fit relative inline-block group z-10'>

                <a href={href}
                    target="_blank"
                    className=''
                >
                    {text} </a>
                <span className='transition-all ease-out duration-[75ms] -z-10 w-full absolute bottom-0 left-0 h-1 bg-s-3 group-hover:h-full'></span>

            </span>
            &nbsp;

        </>
    )
}

{/* <span>{" "}</span>
                            <div className='w-fit h-fit relative inline-block group z-10'>
                                <a href="https://www.kaggle.com/datasets/anindya2906/glove6b"
                                    className=''
                                >
                                    GloVe </a>
                                <span className='transition-all ease-out duration-[50ms] -z-10 w-full absolute bottom-0 left-0 h-1 bg-s-3 group-hover:h-full'></span>
                            </div>
                            <span>{" "}</span> */}