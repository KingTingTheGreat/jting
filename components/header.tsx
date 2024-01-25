import Link from "next/link";
import NavLinks from "./navLinks";
import AdditionalInfo from "./additionalInfo";

export const Header = () => {
	return (
		<header className="flex flex-col items-center w-full bg-[#111]">
			<div className="flex">
				<Link href="/" className="text-8xl p-2 m-4">
					<h1>Jeffrey Ting</h1>
				</Link>
				<AdditionalInfo />
			</div>
			<NavLinks />
		</header>
	);
};
