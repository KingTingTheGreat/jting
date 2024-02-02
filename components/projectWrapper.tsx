import { Project } from "@/types";
import SectionWrapper from "./sectionWrapper";

const ProjectElement = ({ project }: { project: Project }) => {
	return (
		<div>
			<h3>{project.title}</h3>
			<p>{project.role}</p>
		</div>
	);
};

const ProjectWrapper = ({ title, projectList }: { title: string; projectList: Project[] }) => {
	return (
		<SectionWrapper id={title}>
			{projectList.map((project) => (
				<ProjectElement key={project.title} project={project} />
			))}
		</SectionWrapper>
	);
};

export default ProjectWrapper;
