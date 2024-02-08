import { Experience } from "@/types";
import SectionWrapper from "./sectionWrapper";
import ElementWrapper from "./elementWrapper";
import BulletPoint from "./bulletPoint";

const ExperienceElement = ({ experience }: { experience: Experience }) => {
	return (
		<ElementWrapper title={experience.title} subtitle={experience.company}>
			<p>{experience.location}</p>
			<p>{experience.company}</p>
			<p>
				{experience.startDate}-{experience.endDate}
			</p>
			<ul>
				{experience.description.map((description) => (
					<BulletPoint key={description} content={description} />
				))}
			</ul>
		</ElementWrapper>
	);
};

const ExperienceWrapper = ({ title, experienceList }: { title: string; experienceList: Experience[] }) => {
	return (
		<SectionWrapper title={title}>
			{experienceList.map((experience) => (
				<ExperienceElement key={experience.title} experience={experience} />
			))}
		</SectionWrapper>
	);
};

export default ExperienceWrapper;
