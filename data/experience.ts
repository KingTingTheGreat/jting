import { experiencePage } from '@/types';

const experience: experiencePage = {
  title: 'experience',
  description:
    'I have worked as a Software Engineer at a startup, as a Teaching Assistant, and as a Research Assistant.',
  children: [
    {
      title: 'Teaching Assistant',
      startDate: 'January 2024',
      endDate: 'Present',
      company: 'Boston University',
      location: 'Boston, MA',
      description: [
        'Led weekly lab sections for Web Application Development and held office hours to further assist students',
        'Taught students how to create basic websites, progressing up to full stack web applications',
        'Covered material on Git/GitHub, HTML/CSS, JavaScript, React, NextJS, Apollo GraphQl, and MongoDB',
      ],
    },
    {
      title: 'IT Intern',
      startDate: 'June 2023',
      endDate: 'August 2023',
      company: 'Lavner Education',
      location: 'Garden City, NY',
      description: [
        'Introduced students to various programming languages, such as Python, C++, Java, Bash, HTML/CSS, and JavaScript',
        'Led classes on programming basics, terminal usage, Git/GitHub, web app development, and game development',
        'Adapted curricula and teaching methods to accommodate individual students&apos; needs',
      ],
    },
    {
      title: 'Section Leader',
      startDate: 'April 2023',
      endDate: 'June 2023',
      company: 'Stanford University',
      location: 'Remote',
      description: [
        'Taught a weekly class of 15 students the fundamentals of programming with Python by preparing lessons, answering questions on the section forum, and helping students review, condense, optimize, and clearly document their code',
      ],
    },
    {
      title: 'Configuration Center Intern',
      startDate: 'June 2017',
      endDate: 'June 2023',
      company: 'Future Tech Enterprise Inc.',
      location: 'Holbrook, NY',
      description: [
        'Optimized production workflow through the implementation of physical improvements and the creation of software scripting efficiencies, significantly reducing errors and improving productivity',
      ],
    },
  ],
};

export default experience;
