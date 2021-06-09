import Video from "../components/Video/Video";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <section className="text-center pb-12 hero">
        <img src="/images/slider.png" alt="hero" className="w-full" />
        <div className="max-w-screen-md  mx-auto text-[#aeadad] mt-[50px] font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus
          eu.
        </div>
        <button className="uppercase bg-green-primary font-medium text-white px-4 py-2 mt-5 text-sm">
          Browse portfolio
        </button>
      </section>
      <section className="py-10 bg-[#efefef] px-4 lg:px-0">
        <div className="container max-w-screen-lg mx-auto sm:grid grid-cols-12">
          <Video />
        </div>
      </section>
    </>
  );
};

export default Home;
