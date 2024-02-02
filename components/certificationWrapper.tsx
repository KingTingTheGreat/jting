import { Certification } from "@/types";
import SectionWrapper from "./sectionWrapper";

const CertificationElement = ({ certification }: { certification: Certification }) => {
	return (
		<div>
			<h3>{certification.title}</h3>
			<p>{certification.organization}</p>
		</div>
	);
};

const CertificationWrapper = ({ title, certificationList }: { title: string; certificationList: Certification[] }) => {
	return (
		<SectionWrapper id={title}>
			{certificationList.map((certification) => (
				<CertificationElement key={certification.title} certification={certification} />
			))}
		</SectionWrapper>
	);
};

export default CertificationWrapper;
