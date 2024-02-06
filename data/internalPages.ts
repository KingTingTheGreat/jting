import { internalPagesType } from "@/types";

const internalPages: internalPagesType = {
	education: {
		title: "education",
		description:
			"My degree has granted me extensive knowledge of Computer Science and Software Engineering, with coursework ranging from Data Structures and Algorithms and Functional Programming, to Software Engineering, Web Application Development, and Designing Distributed Computational Systems.",
		children: [
			{
				title: "B.A. Computer Science",
				school: "Boston University",
				startDate: "September 2021",
				endDate: "May 2025",
				gpa: "4.8",
				relevantCoursework: [
					"Software Engineering",
					"Web Application Development",
					"Functional Programming",
					"Design and Analysis of Algorithms",
					"Data Structures and Algorithms",
					"Computer System Architecture",
					"Probabilistic Computing",
					"Discrete Mathematics",
					"Data Structures and Algorithms",
					"Concurrent Computational Systems",
					"Computation Linear Algebra",
				],
			},
			{
				title: "B.A Philosophy; minor Women's Gender and Sexuality Studies",
				school: "Boston University",
				startDate: "September 2021",
				endDate: "May 2025",
				gpa: "3.8",
				relevantCoursework: [
					"Ethical Reasoning",
					"Symbolic Logic",
					"Advanced Spanish",
					"Advanced Writing Seminar",
				],
			},
		],
	},
	experience: {
		title: "experience",
		description:
			"I have worked as a Software Engineer at a startup, as a Teaching Assistant, and as a Research Assistant.",
		children: [
			{
				title: "Teaching Assistant",
				startDate: "January 2024",
				endDate: "Present",
				company: "Boston University",
				location: "Boston, MA",
				description: [
					"Led weekly lab sections for Web Application Development and held office hours to further assist students",
					"Taught students how to create basic websites, progressing up to full stack web applications",
					"Covered material on Git/GitHub, HTML/CSS, JavaScript, React, NextJS, Apollo GraphQl, and MongoDB",
				],
			},
			{
				title: "IT Intern",
				startDate: "June 2023",
				endDate: "August 2023",
				company: "Lavner Education",
				location: "Garden City, NY",
				description: [
					"Introduced students to various programming languages, such as Python, C++, Java, Bash, HTML/CSS, and JavaScript",
					"Led classes on programming basics, terminal usage, Git/GitHub, web app development, and game development",
					"Adapted curricula and teaching methods to accommodate individual students&apos; needs",
				],
			},
			{
				title: "Section Leader",
				startDate: "April 2023",
				endDate: "June 2023",
				company: "Stanford University",
				location: "Remote",
				description: [
					"Taught a weekly class of 15 students the fundamentals of programming with Python by preparing lessons, answering questions on the section forum, and helping students review, condense, optimize, and clearly document their code",
				],
			},
			{
				title: "Configuration Center Intern",
				startDate: "June 2017",
				endDate: "June 2023",
				company: "Future Tech Enterprise Inc.",
				location: "Holbrook, NY",
				description: [
					"Optimized production workflow through the implementation of physical improvements and the creation of software scripting efficiencies, significantly reducing errors and improving productivity",
				],
			},
		],
	},
	projects: {
		title: "projects",
		description:
			"I have worked on a variety of projects, ranging from web applications to machine learning models.",
		children: [
			{
				title: "Culinary Community",
				role: "Backend Developer",
				link: "https://culinary-community.vercel.app/",
				description: "A social media platform for foodies to share their favorite recipes and restaurants.",
				technologies: ["TypeScript", "Next.js", "Tailwind CSS", "MongoDB", "Google Cloud"],
			},
			{
				title: "NerdNest3D",
				role: "Full Stack Developer",
				link: "https://nerdnest3d.com/",
				description: "A 3D printing service that allows users to upload and print their own models.",
				technologies: ["TypeScript", "Next.js", "Tailwind CSS", "MongoDB", "AWS", "Google OAuth"],
			},
			{
				title: "Indiefy",
				role: "Full Stack Developer",
				link: "https://indiefy.org/",
				description: "A web app that allows users to discover new indie music.",
				technologies: [
					"TypeScript",
					"Next.js",
					"Tailwind CSS",
					"Spotify Web API",
					"Spotify OAuth",
					"MongoDB",
					"AWS",
				],
			},
			{
				title: "LEGO Mosaic Generator",
				role: "Full Stack Developer",
				link: "https://image-to-lego.vercel.app/",
				description: "A web app that converts images into LEGO mosaics.",
				technologies: ["React", "Python", "Flask", "NumPy", "PIL(Pillow)", "OpenPyXl"],
			},
			{
				title: "Recipe Scrape",
				role: "Backend Developer",
				link: "https://recipe-scrape.vercel.app/",
				description: "A web API that scrapes recipes from various websites.",
				technologies: ["Python", "Flask"],
			},
			{
				title: "7-Day Forecast",
				role: "Full Stack Developer",
				link: "https://cs392-final.vercel.app/",
				description: "A web app that displays the 7-day forecast for a given location.",
				technologies: [
					"Javascript",
					"Next.js",
					"IPify API",
					"Visual Crossing Weather API",
					"IP Geolocation API",
				],
			},
			{
				title: "Taylor Swift 2048",
				role: "Sole Developer",
				link: "https://github.com/KingTingTheGreat/Taylor-Swift-2048",
				description: "A 2048 clone with a Taylor Swift theme.",
				technologies: ["Python", "Pygame", "Java"],
			},
		],
	},
	certifications: {
		title: "certifications",
		description: "I have earned a variety of certifications, ranging from web development to machine learning.",
		children: [
			{
				title: "Foundational C# with Microsoft",
				organization: "Microsoft",
				issueDate: "June 2023",
				link: "https://www.youracclaim.com/badges/3b5f2d5e-8f1f-4e1f-8b6f-7e1e2e2d9e3f",
				description: "This certification demonstrates foundational knowledge of C#.",
			},
			{
				title: "Code in Place 2023",
				organization: "Stanford University",
				issueDate: "June 2023",
				link: "https://codeinplace.stanford.edu/certificates/1b2f1f2e3d4e5f6e7d8c9b0a",
				description: "This certification demonstrates proficiency in Python and Python education.",
			},
		],
	},
	contact: {
		title: "contact",
		description: "Feel free to reach out to me via email, LinkedIn, or GitHub.",
		children: [
			{
				title: "Email",
				link: "mailto:",
			},
		],
	},
};

export default internalPages;
