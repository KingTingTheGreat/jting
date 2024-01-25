import Link from "next/link";
import internalLinks from "@/data/internalLinks";

const StringLink = ({ link }: { link: string }) => {
	// ensure that the link is lowercase
	const lower = link.toLowerCase();
	return (
		<Link href={`#${lower}`} className="p-1 m-1 bg-black flex-1 text-center">
			{link.charAt(0).toUpperCase() + link.slice(1)}
		</Link>
	);
};

const NavLinks = () => {
	return (
		<nav className="flex p-1 w-full justify-around bg-[#333]">
			{internalLinks.map((link) => (
				<StringLink key={link} link={link} />
			))}
		</nav>
	);
};

export default NavLinks;
