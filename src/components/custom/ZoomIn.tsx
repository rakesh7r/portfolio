import { motion } from 'motion/react';
export default function ZoomIn({
	children,
	zoom = 1.2,
	scale = 0.85,
}: {
	children: React.ReactNode;
	zoom?: number;
	scale?: number;
}) {
	return (
		<motion.div whileHover={{ scale: zoom }} whileTap={{ scale }} className="cursor-pointer">
			{children}
		</motion.div>
	);
}
