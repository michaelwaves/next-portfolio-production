import {useScroll, animated} from '@react-spring/web'
import { useRef } from 'react'

export default function AnimatedBars({lines=40,width=20, container}: {lines: number, width: number, container:any}){
    const barContainerRef = useRef<HTMLDivElement>(null!)
    const { scrollYProgress } = useScroll({
        container: container,
        default: {
          immediate: true,
        },
      })
    return(
        <div className='w-full h-full fixed inset-0 pointer-events-none z-0'>
        <animated.div ref={barContainerRef} className={`flex flex-col justify-between z-20 items-end h-full`}>
          {Array.from({ length: lines }).map((_, i) => (
            <animated.div
              key={i}
              className={`h-[1vh] bg-s-3 dark:bg-p-3`}
              style={{
                width: scrollYProgress.to(scrollP => {
                  const percentilePosition = (i + 1) / lines

                  return width / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32
                }),
              }}
            />
          ))}
        </animated.div>
        </div>
    )
}