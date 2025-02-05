import '@/components/styles/header.css'
import Anchor from './custom/Anchor'
import ThemeSwitch from './custom/themeSwitch'
import { Github, Linkedin, Menu } from 'lucide-react'
import ZoomIn from './custom/ZoomIn'
import { useState } from 'react'
import { motion } from 'motion/react'
import { useIsSmallScreen } from '@/hooks/useIsSmallScreen'

export default function Header() {
    const [activeSection, setActive] = useState<string>('profile')
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const isSmallScreen = useIsSmallScreen()

    // const [scrollPosition, setScrollPosition] = useState<number>(0)
    // const [scrollPosition, setScrollPosition] = useState<number>(0)

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const sections = ['profile', 'projects', 'experience', 'contact']
    //         const scrollPosition = window.scrollY
    //         const currentSection = sections.find((section) => {
    //             const element = document.getElementById(section)
    //             return element?.offsetTop
    //         })
    //         setActiveSection(currentSection)
    //         setScrollPosition(scrollPosition)
    //     }
    //     window.addEventListener('scroll', handleScroll)
    //     return () => window.removeEventListener('scroll', handleScroll)
    // }, [])

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setScrollPosition(window.scrollY)
    //     }
    //     window.addEventListener('scroll', handleScroll)
    //     return () => window.removeEventListener('scroll', handleScroll)
    // }, [activeSection])

    const toggleMenu = () => {
        setMenuOpen((menuOpen) => !menuOpen)
        const headerLinks = document.querySelector('.header-links')
        if (headerLinks) {
            headerLinks.classList.toggle('hidden')
        }
    }

    const setActiveSection = (section: string) => {
        setActive(section)
        const headerLinks = document.querySelector('.header-links')
        if (headerLinks) {
            headerLinks.classList.toggle('hidden')
        }
    }

    return (
        <div className="header w-screen p-3 shadow-md h-full sticky top-0 bg-white  flex flex-row items-start sm:items-center  justify-between dark:bg-black dark:border-slate-800 dark:border-b-4 z-50 ">
            <div className="flex flex-col flex-start ">
                <ZoomIn>
                    <Menu className="menu-icon block sm:hidden ml-1" onClick={toggleMenu} />
                </ZoomIn>
                {(!isSmallScreen || menuOpen) && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className="header-links flex-row items-center justify-center sm:flex"
                    >
                        <Anchor
                            id="profile"
                            href="#profile"
                            text="Profile"
                            active={activeSection === 'profile'}
                            onClick={() => setActiveSection('profile')}
                        />
                        <Anchor
                            id="projects"
                            href="#projects"
                            text="Projects"
                            active={activeSection === 'projects'}
                            onClick={() => setActiveSection('projects')}
                        />
                        <Anchor
                            id="experience"
                            href="#experience"
                            text="Experience"
                            active={activeSection === 'experience'}
                            onClick={() => setActiveSection('experience')}
                        />
                        <Anchor
                            id="contact"
                            href="#contact"
                            text="Contact Me"
                            active={activeSection === 'contact'}
                            onClick={() => setActiveSection('contact')}
                        />
                    </motion.div>
                )}
            </div>
            <div className="profile-links flex flex-row items-center justify-center gap-8 h-max ">
                <ZoomIn>
                    <Linkedin />
                </ZoomIn>
                <ZoomIn>
                    <Github />
                </ZoomIn>
                <ZoomIn>
                    <ThemeSwitch />
                </ZoomIn>
            </div>
        </div>
    )
}
