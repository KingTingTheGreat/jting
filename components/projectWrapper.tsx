import { Project } from '@/types';
import SectionWrapper from './sectionWrapper';
import ElementWrapper from './elementWrapper';
import Link from 'next/link';

const ProjectElement = ({ project }: { project: Project }) => {
  return (
    <ElementWrapper title={project.title} subtitle={project.role}>
      <ul className="flex flex-wrap">
        {project.technologies.map((technology) => (
          <li
            key={technology}
            className="m-2 border-solid border-[#fff] rounded-md"
          >
            {technology}
          </li>
        ))}
      </ul>
      <p>{project.description}</p>
      <Link
        href={project.link}
        target="_blank"
        className="text-blue-500 hover:underline"
      >
        View project here
      </Link>
    </ElementWrapper>
  );
};

const ProjectWrapper = ({
  title,
  projectList,
}: {
  title: string;
  projectList: Project[];
}) => {
  return (
    <SectionWrapper title={title}>
      {projectList.map((project) => (
        <ProjectElement key={project.title} project={project} />
      ))}
    </SectionWrapper>
  );
};

export default ProjectWrapper;
