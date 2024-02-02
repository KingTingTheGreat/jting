const SectionWrapper = ({ id, children }: { id: string; children: React.ReactNode }) => {
	return (
		<div id="id" className="flex flex-col items-center justify-center">
			<h1 className="text-4xl font-bold capitalize">{id}</h1>
			{children}
		</div>
	);
};

export default SectionWrapper;
