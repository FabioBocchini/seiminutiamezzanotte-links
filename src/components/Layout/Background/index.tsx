'use client'

import {cn} from '@/utils/cn'
import {
    type PropsWithChildren,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react'
import Image, {getImageProps} from "next/image";

type Props = PropsWithChildren

const backgroundUrl = '../../../../public/assets/background.jpg'

const getBackgroundImage = (srcSet = '') => {
    const imageSet = srcSet
        .split(', ')
        .map((str) => {
            const [url, dpi] = str.split(' ')
            return `url("${url}") ${dpi}`
        })
        .join(', ')
    return `image-set(${imageSet})`
}

export const Background = ({children}: Props) => {
    const contentRef = useRef<HTMLDivElement>(null)
    const [backgroundPosition, setBackgroundPosition] = useState('center top')

    const { props: { srcSet }} = getImageProps({src: '../../../../assets/background.jpg', alt: 'background', width: 128, height: 128})
    const backgroundImage = getBackgroundImage(srcSet)

    const handleScroll = useCallback(() => {
        if (!contentRef.current) {
            return
        }
        const scrollPosition = window.scrollY
        const newBackgroundPositionY = scrollPosition * 0.3
        setBackgroundPosition(`center ${-newBackgroundPositionY}px`)
    }, [])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    return (
        // <div className={cn('relative w-full overflow-hidden')}>
        //     <div
        //         className={cn(
        //             'absolute inset-0 bg-cover bg-center will-change-transform',
        //         )}
        //         style={{backgroundImage}}
        //     />
        //     <div className={cn('relative z-10')}>
        //         {children}
        //     </div>
        // </div>
        <Image src={'/assets/background.jps'} alt={'bg'}/>
    )
}
