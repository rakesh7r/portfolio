import { ExperienceType } from '@/types/experience.types';
import { motion } from 'motion/react';
import ExperienceItem from './custom/experienceItem';

export default function Experience() {
	const experiences: ExperienceType[] = [
		{
			company: 'Dupont speciality Products Inida Pvt ltd.',
			positions: [
				{
					position: 'Frontend Developer',
					description: ['Description 1', 'Description 2', 'Description 3'],
					startDate: '2022-07',
					endDate: 'Present',
					location: 'Hyderabad, India',
				},
				{
					position: 'Software development Intern',
					description: ['Description 2'],
					startDate: '2021-06',
					endDate: '2021-07',
					location: 'Hyderabad, India',
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
