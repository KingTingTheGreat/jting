import { Experience } from "@/types";
import SectionWrapper from "./sectionWrapper";

const ExperienceElement = ({ experience }: { experience: Experience }) => {
	return (
		<div>
			<h3>{experience.title}</h3>
			<p>{experience.company}</p>
		</div>
	);
};

const ExperienceWrapper = ({ title, experienceList }: { title: string; experienceList: Experience[] }) => {
	return (
		<SectionWrapper id={title}>
			{experienceList.map((experience) => (
				<ExperienceElement key={experience.title} experience={experience} />
			))}
		</SectionWrapper>
	);
};

export default ExperienceWrapper;
