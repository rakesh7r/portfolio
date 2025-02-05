import { ThemeContext } from '@/contexts/theme/ThemeContext'
import { useContext } from 'react'
import { Sun, Moon } from 'lucide-react'
import '@/components/styles/header.css'

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <div className="header w-[100vw] p-3 shadow-md h-full sticky top-0 z-10 bg-black dark:bg-black flex flex-row items-center justify-end">
            <button className="text-white theme-toggle bg-transparent" onClick={toggleTheme}>
                {theme === 'light' ? <Sun className="icon sun" /> : <Moon className="icon moon" />}
            </button>
        </div>
    )
}
