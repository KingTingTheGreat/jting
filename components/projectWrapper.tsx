import { Project } from '@/types';
import SectionWrapper from './sectionWrapper';
import ElementWrapper from './elementWrapper';
import Link from 'next/link';
import projects from '@/data/projects';

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

const ProjectWrapper = () => {
  return (
    <SectionWrapper title={projects.title} description={projects.description}>
      {projects.children.map((project) => (
        <ProjectElement key={project.title} project={project} />
      ))}
    </SectionWrapper>
  );
};

export default ProjectWrapper;
