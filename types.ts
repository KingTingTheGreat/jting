export type exLink = {
  name: string;
  url: string;
  image?: string;
  type?: string;
};

export type educationPage = {
  title: string;
  description: string;
  children: Education[];
};

export type experiencePage = {
  title: string;
  description: string;
  children: Experience[];
};

export type projectPage = {
  title: string;
  description: string;
  children: Project[];
};

export type certificationPage = {
  title: string;
  description: string;
  children: Certification[];
};

export type contactPage = {
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

export type Education = {
  title: string;
  school: string;
  startDate: string;
  endDate: string;
  gpa: string;
  relevantCoursework: string[];
};

export type Experience = {
  title: string;
  startDate: string;
  endDate: string;
  company: string;
  location: string;
  description: string[];
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
  description: string;
};
