import Link from "next/link";
import internalPages from "@/data/internalPages";

const StringLink = ({ link }: { link: string }) => {
	// ensure the link is lowercase
	const lower = link.toLowerCase();
	return (
		<Link href={`#${lower}`} className="p-1 m-1 bg-black flex-1 text-center capitalize">
			{link}
		</Link>
	);
};

const NavLinks = () => {
	return (
		<nav className="flex p-1 w-full justify-around bg-[#333]">
			{Object.entries(internalPages).map(([key]) => (
				<StringLink key={key} link={key} />
			))}
		</nav>
	);
};

export default NavLinks;
