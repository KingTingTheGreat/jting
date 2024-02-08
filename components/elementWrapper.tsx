import Link from "next/link";

const ElementWrapper = ({
	title,
	subtitle,
	link,
	children,
}: {
	title: string;
	subtitle: string;
	link: string | undefined;
	children: React.ReactNode;
}) => {
	return (
		<div id="title" className="m-1 p-1 md:m-2 md:p-2 transition rounded-xl hover:bg-[#191b29]">
			<h1 className="text-3xl">
				{link ? (
					<Link href={link} target="_blank">
						<span className="text-blue-200">{title}</span>
					</Link>
				) : (
					<span className="text-blue-200">{title}</span>
				)}
				<span className="hidden md:inline"> | </span>
				<span className="md:hidden">
					<br />
				</span>
				<span className="text-blue-400">{subtitle}</span>
			</h1>
			{children}
		</div>
	);
};

export default ElementWrapper;
