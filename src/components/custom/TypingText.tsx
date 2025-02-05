import { motion } from 'motion/react';
import { Fragment } from 'react';

const TypingText = ({
	type = 'heading',
	text = ['Rakesh Gandla'],
	speed = 'normal',
}: {
	text: string[];
	type?: 'heading' | 'text' | 'smallHeading';
	speed?: 'slow' | 'normal' | 'fast';
}) => {
	const transitionSpeed = speed === 'slow' ? 0.2 : speed === 'normal' ? 0.1 : 0.03;

	return (
		<motion.h1
			className={
				type === 'heading'
					? 'text-2xl md:text-4xl font-semibold'
					: type === 'smallHeading'
						? 'text-xl font-semibold'
						: 'text-sm'
			}
			initial="hidden"
			animate="visible"
			variants={{
				hidden: { opacity: 1 },
				visible: {
					opacity: 1,
					transition: { staggerChildren: transitionSpeed },
				},
			}}
		>
			{text.map((word, idx) => (
				<Fragment key={idx}>
					{word.split('').map((char, index) => (
						<motion.span key={index} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
							{char === '\n' ? <br /> : char}
						</motion.span>
					))}
					<br />
				</Fragment>
			))}
		</motion.h1>
	);
};

export default TypingText;
