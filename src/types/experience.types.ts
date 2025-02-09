export interface ExperienceType {
	company: string;
	positions: PositionType[];
}

export interface PositionType {
	position: string;
	description: string;
	startDate: string;
	endDate: string;
	location: string;
}
