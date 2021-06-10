import PageTitle from "../components/PageTitle/PageTitle";

const About = () => {
  return (
    <>
      <PageTitle title="About my business" />
      <div className="container mx-auto max-w-screen-lg md:grid grid-cols-12 grid-rows-2 gap-7 text-sm text-gray-dark px-4 lg:px-0">
        <img
          src="/images/about.png"
          alt="about"
          className="col-span-5 mx-auto mb-4"
        />
        <div className="col-span-7 md:mb-4 mb-10">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
            faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
            mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
            congue ut, luctus a nulla. Donec sit amet sapien neque, id
            ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
            elit congue lacinia.
          </p>
          <p className="mt-6">
            Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.
            Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi.
            Pellentesque pellentesque arcu a elit congue lacinia. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat
            lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis
            ac, gravida quis tortor. Suspendisse non urna mi, quis tincidunt
            eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="row-start-2 col-span-6 md:mb-4 mb-10">
          <h2 className="text-2xl font-semibold uppercase mb-4">
            Mission statement
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
            faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
            mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
            congue ut, luctus a nulla. Donec sit amet sapien neque, id
            ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
            elit congue lacinia.
          </p>
        </div>
        <div className="row-start-2 col-span-6 md:mb-4 mb-10">
          <h2 className="text-2xl font-semibold uppercase mb-4">Fun facts</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
            faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
            mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
            congue ut, luctus a nulla. Donec sit amet sapien neque, id
            ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
            elit congue lacinia.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
