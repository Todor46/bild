import Navigation from "../Header/Navigation";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="bg-gray-800 py-14 px-4 lg:px-0">
        <div className="container mx-auto max-w-screen-lg md:flex justify-between text-center">
          <h1 className="text-2xl uppercase font-medium text-gray-100">
            Are you ready to be blown away?
          </h1>
          <button className="uppercase bg-green-500 px-6 py-2 text-white font-semibold mt-6 md:mt-0">
            Click here to find out
          </button>
        </div>
      </div>
      <div className="bg-gray-100 py-7 px-4 lg:px-0">
        <div className="container mx-auto max-w-screen-lg text-center md:flex items-center justify-between text-gray-300 text-xs font-semibold">
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
