import internalPages from '@/data/internalPages';
import CertificationWrapper from '@/components/certificationWrapper';
import EducationWrapper from '@/components/educationWrapper';
import ExperienceWrapper from '@/components/experienceWrapper';
import ProjectWrapper from '@/components/projectWrapper';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-2 md:p-6 w-full">
      <EducationWrapper
        title={internalPages.education.title}
        educationList={internalPages.education.children}
      />
      <ExperienceWrapper
        title={internalPages.experience.title}
        experienceList={internalPages.experience.children}
      />
      <ProjectWrapper
        title={internalPages.projects.title}
        projectList={internalPages.projects.children}
      />
      <CertificationWrapper
        title={internalPages.certifications.title}
        certificationList={internalPages.certifications.children}
      />
    </main>
  );
}
