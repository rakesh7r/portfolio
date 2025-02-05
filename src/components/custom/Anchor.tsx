import ZoomIn from './ZoomIn';

const Anchor = ({
	id,
	href,
	text,
	active,
	onClick,
}: {
	id?: string;
	href: string;
	text: string;
	active: boolean;
	onClick: () => void;
}) => (
	<ZoomIn zoom={1.05}>
		<a
			id={id}
			href={href}
			className={`p-2 block text-black cursor-pointer  hover:text-blue-500 dark:text-white hover:underline rounded-md ${active ? 'text-blue-400' : ''}`}
			onClick={onClick}
		>
			{text}
		</a>
	</ZoomIn>
);

export default Anchor;
