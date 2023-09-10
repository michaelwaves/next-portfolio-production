export default function UnderLine({ text, href }: { text: string, href: string }) {
    return (
        <>
            &nbsp;
            <span className='w-auto h-8 relative inline-block overflow-y-hidden translate-y-[11px] md:translate-y-2'>

                <a href={href}
                    target="_blank"
                    className='peer '
                >
                    {text} </a>
                <span className='transition-all ease-out duration-[75ms] -z-10 w-full absolute bottom-0 left-0 h-full translate-y-6 bg-s-3 peer-hover:translate-y-0'></span>

            </span>
            &nbsp;

        </>
    )
}