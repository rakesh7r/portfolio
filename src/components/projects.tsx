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
			title: 'Project 2',
			description: 'Description 2',
			image: 'https://via.placeholder.com/150',
			appUrl: 'https://www.google.com',
			githubUrl: 'https://www.google.com',
		},
		{
			title: 'Project 3',
			description: 'Description 3',
			image: 'https://via.placeholder.com/150',
			appUrl: 'https://www.google.com',
			githubUrl: 'https://www.google.com',
		},
	];
	return (
		<motion.div id="projects" className="section">
			<motion.h2 className="text-2xl font-bold">Projects</motion.h2>
			<motion.div className="flex flex-row gap-4">
				{projects.map((project) => (
					<ProjectCard key={project.githubUrl} {...project} />
				))}
			</motion.div>
		</motion.div>
	);
}
