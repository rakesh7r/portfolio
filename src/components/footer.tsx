import { motion } from 'motion/react';

export default function Footer() {
	return (
		<motion.div className="flex flex-col gap-4 w-screen justify-center items-center p-8 border-t-2 border-gray-200 dark:border-gray-800">
			<motion.p className="text-gray-500 dark:text-gray-300">
				&copy; {new Date().getFullYear()} All rights reserved.
			</motion.p>
		</motion.div>
	);
}
