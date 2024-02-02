import { internalPagesType } from "@/types";

const internalPages: internalPagesType = {
	education: {
		title: "education",
		description:
			"My degree has granted me extensive knowledge of Computer Science and Software Engineering, with coursework ranging from Data Structures and Algorithms and Functional Programming, to Software Engineering, Web Application Development, and Designing Distributed Computational Systems.",
		children: [
			{
				title: "B.A. Computer Science; B.A Philosophy; minor Women's Gender and Sexuality Studies",
				school: "Boston University",
				startDate: "September 2021",
				endDate: "May 2025",
				gpa: "3.8",
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
				description: "Teaching Assistant for CS 391: Web Application Development.",
			},
			{
				title: "IT Intern",
				startDate: "June 2023",
				endDate: "August 2023",
				company: "Lavner Education",
				location: "Garden City, NY",
				description: "Internship with Lavner Education, a STEM education company.",
			},
			{
				title: "Section Leader",
				startDate: "April 2023",
				endDate: "June 2023",
				company: "Stanford University",
				location: "Remote",
				description: "Section Leader for Stanford's CS 106A: Programming Methodology course.",
			},
			{
				title: "Configuration Center Intern",
				startDate: "June 2017",
				endDate: "June 2023",
				company: "Future Tech Enterprise Inc.",
				location: "Holbrook, NY",
				description: "Internship with Future Tech Enterprise Inc., a global IT solutions provider.",
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
			},
			{
				title: "Code in Place 2023",
				organization: "Stanford University",
				issueDate: "June 2023",
				link: "https://codeinplace.stanford.edu/certificates/1b2f1f2e3d4e5f6e7d8c9b0a",
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
