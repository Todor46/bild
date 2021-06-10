const PageTitle = ({ title }) => {
  return (
    <div className="bg-green-primary">
      <div className="container mx-auto max-w-screen-lg py-8">
        <h1 className="text-white text-3xl font-semibold uppercase">{title}</h1>
      </div>
    </div>
  );
};

export default PageTitle;
