import { exLink } from "@/types";
import Link from "next/link";
import Image from "next/image";
import externalLinks from "@/data/externalLinks";

const LinkWrapper = ({ link }: { link: exLink }) => {
	return (
		<div className="items-center text-center p-1.5 m-2 bg-black rounded-lg border-2 border-slate-700 border-solid cursor-pointer hover:border-blue-300">
			<Link href={link.url} target="_blank" type={link.type ?? ""}>
				{link.image ? <Image src={link.image} alt={link.name} fill={true} objectFit="contain" /> : link.name}
			</Link>
		</div>
	);
};

const AdditionalInfo = () => {
	return (
		<div className="flex items-center justify-between p-1 m-2">
			{externalLinks.map((link) => (
				<LinkWrapper key={link.name} link={link} />
			))}
		</div>
	);
};

export default AdditionalInfo;
