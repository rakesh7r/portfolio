import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const MyIntro = ({ phrases, prefix = 'A' }: { phrases: string[]; prefix?: string }) => {
	const [text, setText] = useState('');
	const [index, setIndex] = useState(0);
	const [deleting, setDeleting] = useState(false);
	const [letterIndex, setLetterIndex] = useState(0);

	useEffect(() => {
		const currentWord = phrases[index];
		const typingSpeed = deleting ? 50 : 200;

		const timeout = setTimeout(() => {
			if (!deleting && letterIndex < currentWord.length) {
				setText((prev) => prev + currentWord[letterIndex]);
				setLetterIndex((prev) => prev + 1);
			} else if (deleting && letterIndex > 0) {
				setText((prev) => prev.slice(0, -1));
				setLetterIndex((prev) => prev - 1);
			} else {
				setDeleting((prev) => !prev);

				if (!deleting) {
					setTimeout(() => setDeleting(true), 1000); // Wait before deleting
				} else {
					setIndex((prev) => (prev + 1) % phrases.length);
					setLetterIndex(0);
				}
			}
		}, typingSpeed);

		return () => clearTimeout(timeout);
	}, [text, deleting, letterIndex, index, phrases]);

	return (
		<h1 className="sm:text-4xl text-2xl font-semibold">
			{prefix} <motion.span className="text-blue-500">{text}</motion.span>
			<motion.span animate={{ opacity: [1, 0, 1] }} transition={{ repeat: Infinity, duration: 3 }}>
				|
			</motion.span>
		</h1>
	);
};

export default MyIntro;
