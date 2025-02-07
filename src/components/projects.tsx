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
		<motion.div id="projects" className="section flex flex-col gap-4 shadow-lg mb-20 p-8 w-screen">
			<motion.h2 className="text-2xl font-semibold text-gray-500">Projects</motion.h2>
			<motion.div className="flex flex-row gap-4 overflow-auto p-5">
				{projects.map((project) => (
					<ProjectCard {...project} />
				))}
			</motion.div>
		</motion.div>
	);
}
