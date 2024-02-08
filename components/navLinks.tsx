import Link from "next/link";
import internalPages from "@/data/internalPages";

const StringLink = ({ link }: { link: string }) => {
	return (
		<Link
			href={`#${link.toLowerCase()}`}
			className="p-2 text-xl capitalize rounded-md my-1.5 mx-2 transition flex-1 bg-black border-[6px] border-solid border-white text-center hover:border-blue-400 hover:text-blue-100">
			{link}
		</Link>
	);
};

const NavLinks = () => {
	return (
		<nav className="flex w-full justify-around">
			{Object.entries(internalPages).map(([key]) => (
				<StringLink key={key} link={key} />
			))}
		</nav>
	);
};

export default NavLinks;
