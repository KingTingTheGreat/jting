import externalLinks from "@/data/externalLinks";
import { LinkWrapper } from "./linkWrapper";
import Link from "next/link";
import { NavLinks } from "./navLinks";

export const Header = () => {
	return (
		<header className="flex flex-col items-center w-full bg-[#111]">
			<div className="flex">
				<Link href="/" className="text-8xl p-2 m-4">
					<h1>Jeffrey Ting</h1>
				</Link>
				<div className="flex items-center justify-between p-1 m-2">
					{externalLinks.map((link) => (
						<LinkWrapper key={link.name} link={link} />
					))}
				</div>
			</div>
			<NavLinks />
		</header>
	);
};
