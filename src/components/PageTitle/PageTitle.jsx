const PageTitle = ({ title }) => {
  return (
    <div className="bg-green-500 mb-[50px]">
      <div className="container mx-auto max-w-screen-lg py-8 px-4 lg:px-0">
        <h1 className="text-white text-3xl font-semibold uppercase">{title}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
