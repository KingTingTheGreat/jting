const ElementWrapper = ({
	title,
	subtitle,
	children,
}: {
	title: string;
	subtitle: string;
	children: React.ReactNode;
}) => {
	return (
		<div id="title" className="m-2">
			<h1 className="text-3xl">
				{title} | {subtitle}
			</h1>
			{children}
		</div>
	);
};

export default ElementWrapper;
