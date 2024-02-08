import { Certification } from "@/types";
import SectionWrapper from "./sectionWrapper";
import Link from "next/link";
import ElementWrapper from "./elementWrapper";

const CertificationElement = ({ certification }: { certification: Certification }) => {
	return (
		<ElementWrapper title={certification.title} subtitle={certification.organization}>
			<p>Issued: {certification.issueDate}</p>
			<p>{certification.description}</p>
			<Link href={certification.link} target="_blank" className="text-blue-500 hover:underline">
				View certification here
			</Link>
		</ElementWrapper>
	);
};

const CertificationWrapper = ({ title, certificationList }: { title: string; certificationList: Certification[] }) => {
	return (
		<SectionWrapper title={title}>
			{certificationList.map((certification) => (
				<CertificationElement key={certification.title} certification={certification} />
			))}
		</SectionWrapper>
	);
};

export default CertificationWrapper;
