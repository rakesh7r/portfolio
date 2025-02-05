import { me } from '@/assets';
import { motion } from 'motion/react';
import TypingText from './custom/TypingText';
import MyIntro from './custom/Intro';

const Me = () => {
	return (
		<motion.div
			className="section w-full h-[85vh] px-0 md:px-16 text-black-500 dark:text-white shadow-none sm:shadow-lg mt-0 rounded-md flex flex-col md:flex-row gap-4 items-center justify-between  p-4"
			id="profile"
			initial={{ opacity: 0, scale: 0.5 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{
				duration: 0.8,
				delay: 0.5,
				ease: [0, 0.71, 0.2, 1.01],
			}}
		>
			<motion.img
				style={profilePic}
				initial={{ opacity: 0, scale: 0.5 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{
					duration: 0.8,
					delay: 0.5,
					ease: [0, 0.71, 0.2, 1.01],
				}}
				src={me}
				alt="me"
				id="#me"
				className="w-48 h-48 rounded-full"
			/>
			<div>
				<TypingText type="smallHeading" text={['Hey!']} />
				<TypingText text={["I'm Rakesh Gandla"]} />
				<MyIntro phrases={['Problem Solver', 'Developer', 'Tech Enthusiast']} prefix="A" />
			</div>

			<br />
		</motion.div>
	);
};

const profilePic = {
	width: 300,
	height: 300,
	borderRadius: '50%',
	background: 'var(--accent)',
};

export default Me;
