import { ExperienceType } from '@/types/experience.types';
import { motion } from 'motion/react';

export default function ExperienceItem({ company, positions }: ExperienceType) {
	return (
		<motion.div className="flex flex-col gap-1 border-t-2 pt-3">
			<motion.h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">{company}</motion.h3>
			<motion.div className="px-5">
				{positions.map((position) => (
					<motion.div className="flex flex-col gap-2">
						<motion.div className="flex flex-row justify-between items-center">
							<motion.h4 className="text-md font-semibold text-gray-700 dark:text-gray-300">
								{position.position}
							</motion.h4>
							<motion.span className="text-sm text-gray-500 dark:text-gray-400">
								{position.startDate} - {position.endDate}
							</motion.span>
						</motion.div>
						<motion.p className="text-sm text-gray-500 dark:text-gray-400">{position.description}</motion.p>
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
}
