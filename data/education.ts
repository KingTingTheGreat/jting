import { educationPage } from '@/types';

const education: educationPage = {
  title: 'Education',
  description:
    'My degree has granted me extensive knowledge of Computer Science and Software Engineering, with coursework ranging from Data Structures and Algorithms and Functional Programming, to Software Engineering, Web Application Development, and Designing Distributed Computational Systems.',
  children: [
    {
      title: 'B.A. Computer Science',
      school: 'Boston University',
      startDate: 'September 2021',
      endDate: 'May 2025',
      gpa: '3.8',
      relevantCoursework: [
        'Software Engineering',
        'Web Application Development',
        'Functional Programming',
        'Design and Analysis of Algorithms',
        'Data Structures and Algorithms',
        'Computer System Architecture',
        'Probabilistic Computing',
        'Discrete Mathematics',
        'Data Structures and Algorithms',
        'Concurrent Computational Systems',
        'Computation Linear Algebra',
      ],
    },
    {
      title: "B.A Philosophy + Women's Gender and Sexuality Studies",
      school: 'Boston University',
      startDate: 'September 2021',
      endDate: 'May 2025',
      gpa: '3.8',
      relevantCoursework: [
        'Ethical Reasoning',
        'Symbolic Logic',
        'Advanced Spanish',
        'Advanced Writing Seminar',
      ],
    },
  ],
};

export default education;
