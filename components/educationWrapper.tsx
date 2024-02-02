import { Education } from "@/types";
import SectionWrapper from "./sectionWrapper";

const EducationElement = ({ education }: { education: Education }) => {
	return (
		<div>
			<h3>{education.title}</h3>
			<p>{education.school}</p>
		</div>
	);
};

const EducationWrapper = ({ title, educationList }: { title: string; educationList: Education[] }) => {
	return (
		<SectionWrapper id={title}>
			{educationList.map((education) => (
				<EducationElement key={education.title} education={education} />
			))}
		</SectionWrapper>
	);
};

export default EducationWrapper;
