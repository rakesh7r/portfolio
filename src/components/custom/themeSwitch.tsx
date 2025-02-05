import { Sun, Moon } from 'lucide-react'
import { ThemeContext } from '@/contexts/theme/ThemeContext'
import { useContext, useState } from 'react'
import { motion } from 'motion/react'

export default function ThemeSwitch() {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const [rotate, setRotate] = useState(0)

    const handleClick = () => {
        setRotate(rotate + 360)
        toggleTheme()
    }

    return (
        <motion.div
            className="text-white theme-toggle bg-transparent"
            animate={{ rotate }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            onClick={handleClick}
        >
            {theme === 'light' ? (
                <Sun className="icon sun text-black dark:text-white outline-none" />
            ) : (
                <Moon className="icon moon text-black dark:text-white outline-none" />
            )}
        </motion.div>
    )
}
