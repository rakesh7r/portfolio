import { useEffect, useState } from 'react'

export const useIsSmallScreen = () => {
    const [width, setWidth] = useState<number>(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return width <= 640 ? true : false
}
