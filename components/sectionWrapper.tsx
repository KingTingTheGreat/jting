const SectionWrapper = ({ title, children }: { title: string; children: React.ReactNode }) => {
	return (
		<div id="title" className="flex flex-col justify-center m-4 w-full">
			<h1 className="text-5xl font-semibold capitalize">{title}</h1>
			{children}
		</div>
	);
};

export default SectionWrapper;
