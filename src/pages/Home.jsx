import "../styles/home.css";

const Home = () => {
  return (
    <section className="text-center hero">
      <img src="/images/slider.png" alt="hero" className="w-full" />
      <div className="max-w-screen-md  mx-auto text-[#aeadad] mt-[50px] font-medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu
        eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu.
      </div>
      <button className="uppercase bg-green-primary font-medium text-white px-4 py-2 mt-5 text-sm">
        Browse portfolio
      </button>
    </section>
  );
};

export default Home;
