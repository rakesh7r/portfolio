import { motion } from 'motion/react';
import ZoomIn from './ZoomIn';

type ProjectCardProps = {
	title: string;
	description: string;
	image: string;
	appUrl?: string;
	githubUrl: string;
};

export default function ProjectCard({ title, description, image, appUrl, githubUrl }: ProjectCardProps) {
	return (
		<ZoomIn zoom={1.1} scale={0.9}>
			<motion.div className="flex flex-col gap-4">
				<motion.img src={image} alt={title} className="w-full h-full object-cover" />
				<motion.h2 className="text-2xl font-bold">{title}</motion.h2>
				<motion.p className="text-gray-500">{description}</motion.p>
				<motion.div className="flex gap-4">
					{appUrl && (
						<motion.a href={appUrl} target="_blank" rel="noopener noreferrer">
							App
						</motion.a>
					)}
					<motion.a href={githubUrl} target="_blank" rel="noopener noreferrer">
						Github
					</motion.a>
				</motion.div>
			</motion.div>
		</ZoomIn>
	);
}
