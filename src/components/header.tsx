import '@/components/styles/header.css';
import Anchor from './custom/Anchor';
import ThemeSwitch from './custom/themeSwitch';
import { Github, Linkedin, Menu } from 'lucide-react';
import ZoomIn from './custom/ZoomIn';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useIsSmallScreen } from '@/hooks/useIsSmallScreen';

export default function Header() {
	const [activeSection, setActive] = useState<string>('profile');
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const isSmallScreen = useIsSmallScreen();

	useEffect(() => {
		const handleScroll = () => {
			const currentSection = document.querySelectorAll('.section');
			if (currentSection) {
				currentSection.forEach((section) => {
					const sectionTop = (section as HTMLElement).offsetTop;
					const sectionHeight = (section as HTMLElement).clientHeight;
					if (window.scrollY >= sectionTop - sectionHeight / 2) {
						setActiveSection(section.id);
					}
				});
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => {
		setMenuOpen((menuOpen) => !menuOpen);
		const headerLinks = document.querySelector('.header-links');
		if (headerLinks) {
			headerLinks.classList.toggle('hidden');
		}
	};

	const setActiveSection = (section: string) => {
		setActive(section);
		const headerLinks = document.querySelector('.header-links');
		if (headerLinks) {
			headerLinks.classList.toggle('hidden');
		}
	};

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
							href="#profile"
							text="Profile"
							active={activeSection === 'profile'}
							onClick={() => setActiveSection('profile')}
						/>
						<Anchor
							href="#projects"
							text="Projects"
							active={activeSection === 'projects'}
							onClick={() => setActiveSection('projects')}
						/>
						<Anchor
							href="#experience"
							text="Experience"
							active={activeSection === 'experience'}
							onClick={() => setActiveSection('experience')}
						/>
						<Anchor
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
					<Linkedin onClick={() => window.open('https://www.linkedin.com/in/rakesh7r')} />
				</ZoomIn>
				<ZoomIn>
					<Github onClick={() => window.open('https://github.com/rakesh7r')} />
				</ZoomIn>
				<ZoomIn>
					<ThemeSwitch />
				</ZoomIn>
			</div>
		</div>
	);
}
