const SectionWrapper = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      id={title}
      className="flex flex-col justify-center m-4 w[95%] md:w-[70%]"
    >
      <h1 className="text-5xl font-semibold capitalize">{title}</h1>
      <p>{description}</p>
      {children}
    </div>
  );
};

export default SectionWrapper;
