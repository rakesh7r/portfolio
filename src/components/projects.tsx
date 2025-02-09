import { motion } from 'motion/react';
import ProjectCard from './custom/ProjectCard';

export default function Projects() {
	const projects = [
		{
			title: 'Project 1',
			description: 'Description 1',
			image: 'https://via.placeholder.com/150',
			appUrl: 'https://www.google.com',
			githubUrl: 'https://www.google.com',
		},
		{
			title: 'Project 1',
			description: 'Description 1',
			image: 'https://via.placeholder.com/150',
			appUrl: 'https://www.google.com',
			githubUrl: 'https://www.google.com',
		},
		{
			title: 'Project 1',
			description: 'Description 1',
			image: 'https://via.placeholder.com/150',
			appUrl: 'https://www.google.com',
			githubUrl: 'https://www.google.com',
		},
		{
			title: 'Project 1',
			description: 'Description 1',
			image: 'https://via.placeholder.com/150',
			appUrl: 'https://www.google.com',
			githubUrl: 'https://www.google.com',
		},
		{
			title: 'Project 1',
			description: 'Description 1',
			image: 'https://via.placeholder.com/150',
			appUrl: 'https://www.google.com',
			githubUrl: 'https://www.google.com',
		},
		{
			title: 'Project 1',
			description: 'Description 1',
			image: 'https://via.placeholder.com/150',
			appUrl: 'https://www.google.com',
			githubUrl: 'https://www.google.com',
		},
		{
			title: 'Project 1',
			description: 'Description 1',
			image: 'https://via.placeholder.com/150',
			appUrl: 'https://www.google.com',
			githubUrl: 'https://www.google.com',
		},
		{
			title: 'Project 1',
			description: 'Description 1',
			image: 'https://via.placeholder.com/150',
			appUrl: 'https://www.google.com',
			githubUrl: 'https://www.google.com',
		},
		{
			title: 'Project 1',
			description: 'Description 1',
			image: 'https://via.placeholder.com/150',
			appUrl: 'https://www.google.com',
			githubUrl: 'https://www.google.com',
		},
		{
			title: 'Project 1',
			description: 'Description 1',
			image: 'https://via.placeholder.com/150',
			appUrl: 'https://www.google.com',
			githubUrl: 'https://www.google.com',
		},
		{
			title: 'Project 1',
			description: 'Description 1',
			image: 'https://via.placeholder.com/150',
			appUrl: 'https://www.google.com',
			githubUrl: 'https://www.google.com',
		},
		{
			title: 'Project 1',
			description: 'Description 1',
			image: 'https://via.placeholder.com/150',
			appUrl: 'https://www.google.com',
			githubUrl: 'https://www.google.com',
		},
	];
	return (
		<motion.div
			id="projects"
			className="section flex flex-col gap-4 shadow-lg  p-8 w-screen sm:w-[70vw] border-2 border-gray-200 dark:border-gray-800 rounded-lg"
		>
			<motion.h2 className="text-2xl font-semibold text-gray-500 border-b-2 pb-3">Projects</motion.h2>
			<motion.div className="flex flex-row gap-4 overflow-auto p-5">
				{projects.map((project) => (
					<ProjectCard {...project} />
				))}
			</motion.div>
		</motion.div>
	);
}
