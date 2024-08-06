import { projectPage } from '@/types';

const projects: projectPage = {
  title: 'projects',
  description:
    'I have worked on a variety of projects, ranging from web applications to machine learning models.',
  children: [
    {
      title: 'Culinary Community',
      role: 'Backend Software Engineer',
      link: 'https://culinary-community.vercel.app/',
      description:
        'A social media platform for foodies to share their favorite recipes and restaurants.',
      technologies: [
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
        'MongoDB',
        'Google Cloud',
      ],
    },
    {
      title: 'NerdNest3D',
      role: 'Full-Stack Software Engineer',
      link: 'https://nerdnest3d.com/',
      description:
        'A 3D printing service that allows users to upload and print their own models.',
      technologies: [
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
        'MongoDB',
        'AWS',
        'Google OAuth',
      ],
    },
    {
      title: 'Indiefy',
      role: 'Full-Stack Software Engineer',
      link: 'https://indiefy.org/',
      description: 'A web app that allows users to discover new indie music.',
      technologies: [
        'TypeScript',
        'Next.js',
        'Tailwind CSS',
        'Spotify Web API',
        'Spotify OAuth',
        'MongoDB',
        'AWS',
      ],
    },
    {
      title: 'LEGO Mosaic Generator',
      role: 'Full-Stack Software Engineer',
      link: 'https://image-to-lego.vercel.app/',
      description: 'A web app that converts images into LEGO mosaics.',
      technologies: [
        'React',
        'Python',
        'Flask',
        'NumPy',
        'PIL(Pillow)',
        'OpenPyXl',
      ],
    },
    {
      title: 'Recipe Scrape',
      role: 'Backend Developer',
      link: 'https://recipe-scrape.vercel.app/',
      description: 'A web API that scrapes recipes from various websites.',
      technologies: ['Python', 'Flask'],
    },
    {
      title: '7-Day Forecast',
      role: 'Full-Stack Software Engineer',
      link: 'https://cs392-final.vercel.app/',
      description:
        'A web app that displays the 7-day forecast for a given location.',
      technologies: [
        'Javascript',
        'Next.js',
        'IPify API',
        'Visual Crossing Weather API',
        'IP Geolocation API',
      ],
    },
    {
      title: 'Taylor Swift 2048',
      role: 'Frontend Developer',
      link: 'https://github.com/KingTingTheGreat/Taylor-Swift-2048',
      description: 'A 2048 clone with a Taylor Swift theme.',
      technologies: ['Python', 'Pygame', 'Java'],
    },
  ],
};

export default projects;
