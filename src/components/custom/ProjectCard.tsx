import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';

type ProjectCardProps = {
	title: string;
	description: string;
	image: string;
	appUrl?: string;
	githubUrl: string;
};

export default function ProjectCard({ title, description, image, appUrl, githubUrl }: ProjectCardProps) {
	const getEllipsis = React.useMemo(() => {
		return (str: string, len: number) => {
			if (str.length > len) {
				return str.substring(0, len) + '...';
			}
			return str;
		};
	}, []);

	return (
		<motion.div
			className="w-96  border-2 border-gray-200 dark:border-gray-600 rounded-md"
			whileHover={{ scale: 1.1 }}
		>
			<motion.img src={image} alt={title} className="h-44 min-w-[220px] w-fit object-cover" />
			<div className="p-2">
				<motion.h4>{getEllipsis(title, 10)}</motion.h4>
				<motion.p>{getEllipsis(description, 20)}</motion.p>
				<div className="flex flex-row justify-between items-center px-2">
					{appUrl && (
						<motion.a
							href={appUrl}
							target="_blank"
							className="flex items-center gap-2"
							rel="noopener noreferrer"
						>
							<ExternalLink size={16} /> View App
						</motion.a>
					)}
					<motion.a href={githubUrl} className="flex items-center" target="_blank" rel="noopener noreferrer">
						<Github size={16} /> Github
					</motion.a>
				</div>
			</div>
		</motion.div>
	);
}
