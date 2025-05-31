const SectionTitle = ({
  title,
  paragraph,
  width = "800px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <div className="w-full flex justify-center h-auto">
      <div
        className={`w-full ${center ? "text-center" : ""} flex flex-col flex-1`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-extrabold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px] uppercase md:normal-case">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-white md:text-lg">
          {paragraph} 
        </p>
      </div>
    </div>
  );
};

export default SectionTitle;
