import ProjectsCarousel from "../components/ProjectsCarousel/ProjectsCarousel";
import Video from "../components/Video/Video";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <section className="text-center pb-12 hero">
        <img src="/images/slider.png" alt="hero" className="w-full" />
        <div className="max-w-screen-md  mx-auto text-[#aeadad] mt-[50px] font-medium px-4 md:px-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus
          eu.
        </div>
        <button className="uppercase bg-green-500 hover:bg-green-400 transition-all font-medium text-white px-4 py-2 mt-5 text-sm">
          Browse portfolio
        </button>
      </section>
      <section className="py-10 bg-[#efefef] px-4 lg:px-0">
        <div className="container max-w-screen-lg mx-auto md:grid grid-cols-12">
          <Video />
          <div className="col-span-7 sm:pl-[30px] pt-8 md:pt-0">
            <h1 className="capitalize text-2xl text-gray-600">
              Get to know us a little better!
            </h1>
            <p className="text-sm text-gray-500 pt-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
              faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
              mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
              congue ut, luctus a nulla. Donec sit amet sapien neque, id
              ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
              elit congue lacinia.
            </p>
            <p className="text-sm text-gray-500 pt-[30px]">
              Nullam tellus turpis, fringilla sit amet congue ut, luctus a
              nulla. Donec sit amet sapien neque, id ullamcorper diam. Nulla
              facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
            </p>
          </div>
        </div>
      </section>
      <section className="py-[50px] px-4 md:px-0">
        <h1 className="text-2xl text-gray-500 capitalize text-center">
          A couple of our featured projects
        </h1>
        <p className="mt-6 text-gray-500 max-w-screen-md mx-auto text-sm text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu
          sagittis ac, gravida quis tortor. Suspendisse non urna mi, quis
          tincidunt eros.
        </p>
        <ProjectsCarousel />
      </section>
    </>
  );
};

export default Home;
