import { Certification } from "@/types";
import SectionWrapper from "./sectionWrapper";
import Link from "next/link";
import ElementWrapper from "./elementWrapper";

const CertificationElement = ({ certification }: { certification: Certification }) => {
	return (
		<ElementWrapper title={certification.title} subtitle={certification.organization}>
			<p>{certification.organization}</p>
			<p>Issued: {certification.issueDate}</p>
			<Link href={certification.link} className="text-linkBlue underline">
				link
			</Link>
			<p>{certification.description}</p>
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
