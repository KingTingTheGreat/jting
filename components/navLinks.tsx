import Link from "next/link";
import internalPages from "@/data/internalPages";

const StringLink = ({ link }: { link: string }) => {
	return (
		// <Link
		// 	href={`#${link.toLowerCase()}`}
		// 	className="p-1.5 rounded-md my-1 mx-2 transition flex-1 bg-white hover:bg-blue-400 hover:text-blue-100">
		// 	<div className="bg-black p-1 text-center text-2xl capitalize">{link}</div>
		// </Link>
		<Link
			href={`#${link.toLowerCase()}`}
			className="p-2 text-xl capitalize rounded-md my-1.5 mx-2 transition flex-1 bg-black border-[6px] border-solid border-white text-center hover:border-blue-400 hover:text-blue-100">
			{link}
		</Link>
	);
};

const NavLinks = () => {
	return (
		<nav className="flex w-full justify-around bg-[#333]">
			{Object.entries(internalPages).map(([key]) => (
				<StringLink key={key} link={key} />
			))}
		</nav>
	);
};

export default NavLinks;
