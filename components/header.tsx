import Link from "next/link";
import NavLinks from "./navLinks";
import AdditionalInfo from "./additionalInfo";

export const Header = () => {
	return (
		<header className="flex flex-col items-center w-full bg-[#111]">
			<div className="flex w-full justify-between">
				<div className="flex-1 "></div>
				<Link href="/" className="flex-1 text-center text-8xl pb-2 pt-1 mb-4 mt-2">
					<h1>Jeffrey Ting</h1>
				</Link>
				<AdditionalInfo />
			</div>
			<NavLinks />
		</header>
	);
};
