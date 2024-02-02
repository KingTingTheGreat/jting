export type exLink = {
	name: string;
	url: string;
	image?: string;
	type?: string;
};

type educationPage = {
	title: string;
	description: string;
	children: Education[];
};

type experiencePage = {
	title: string;
	description: string;
	children: Experience[];
};

type projectPage = {
	title: string;
	description: string;
	children: Project[];
};

type certificationPage = {
	title: string;
	description: string;
	children: Certification[];
};

type contactPage = {
	title: string;
	description: string;
	children: {
		title: string;
		link: string;
	}[];
};

export type internalPagesType = {
	education: educationPage;
	experience: experiencePage;
	projects: projectPage;
	certifications: certificationPage;
	contact: contactPage;
};

export type Page = {
	title: string;
	description?: string;
	children: (Education | Experience | Project | Certification)[];
};

export type Education = {
	title: string;
	school: string;
	startDate: string;
	endDate: string;
	gpa: string;
};

export type Experience = {
	title: string;
	startDate: string;
	endDate: string;
	company: string;
	location: string;
	description: string;
};

export type Project = {
	title: string;
	role: string;
	link: string;
	description: string;
	technologies: string[];
};

export type Certification = {
	title: string;
	organization: string;
	issueDate: string;
	link: string;
};
