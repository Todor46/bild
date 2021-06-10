import Navigation from "../Header/Navigation";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="bg-[#322f2f] py-14 px-4 lg:px-0">
        <div className="container mx-auto max-w-screen-lg md:flex justify-between text-center">
          <h1 className="text-2xl uppercase font-medium text-gray-25">
            Are you ready to be blown away?
          </h1>
          <button className="uppercase bg-green-primary px-6 py-2 text-white font-semibold mt-6 md:mt-0">
            Click here to find out
          </button>
        </div>
      </div>
      <div className="bg-gray-25 py-7 px-4 lg:px-0">
        <div className="container mx-auto max-w-screen-lg text-center md:flex items-center justify-between text-[#a5a5a5] text-xs font-semibold">
          <h4 className="uppercase">
            Copyright 2013 Display. All Rights Reserved.
          </h4>
          <div className="footer-navigation mt-3 md:mt-0">
            <Navigation />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
