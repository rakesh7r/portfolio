import { ExperienceType } from '@/types/experience.types';
import { motion } from 'motion/react';
import ExperienceItem from './custom/experienceItem';

export default function Experience() {
	const experiences: ExperienceType[] = [
		{
			company: 'Company 1',
			positions: [
				{
					position: 'Position 1',
					description: 'Description 1',
					startDate: '2020-01-01',
					endDate: '2020-01-01',
					location: 'Location 1',
				},
				{
					position: 'Position 2',
					description: 'Description 2',
					startDate: '2020-01-01',
					endDate: '2020-01-01',
					location: 'Location 2',
				},
			],
		},
		{
			company: 'Company 2',
			positions: [
				{
					position: 'Position 1',
					description: 'Description 1',
					startDate: '2020-01-01',
					endDate: '2020-01-01',
					location: 'Location 1',
				},
			],
		},
	];
	return (
		<motion.div
			id="experience"
			className="section flex flex-col gap-4 w-full sm:w-[70vw] border-2 border-gray-150 dark:border-gray-800 rounded-lg p-8 shadow-md hover:shadow-lg"
		>
			<motion.h2 className="text-2xl font-semibold text-gray-500 ">Experience</motion.h2>
			{experiences.map((experience) => (
				<ExperienceItem {...experience} />
			))}
		</motion.div>
	);
}
