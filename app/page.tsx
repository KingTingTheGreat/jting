import CertificationWrapper from '@/components/certificationWrapper';
import EducationWrapper from '@/components/educationWrapper';
import ExperienceWrapper from '@/components/experienceWrapper';
import ProjectWrapper from '@/components/projectWrapper';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-2 md:p-6 w-full">
      <EducationWrapper />
      <ExperienceWrapper />
      <ProjectWrapper />
      <CertificationWrapper />
    </main>
  );
}
