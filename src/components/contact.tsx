import { motion } from 'motion/react';

export default function Contact() {
	return (
		<motion.div
			id="contact"
			className="section flex flex-col gap-4 shadow-lg p-8 w-screen sm:w-[70vw] border-2 border-gray-200 dark:border-gray-800 rounded-lg"
		>
			<motion.h2 className="text-2xl font-semibold text-gray-500">Contact</motion.h2>
		</motion.div>
	);
}
