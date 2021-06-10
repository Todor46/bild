const Hamburger = ({ open, setIsOpen }) => {
  return (
    <button
      className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white z-20"
      onClick={() => setIsOpen(!open)}
    >
      <span class="sr-only">Open main menu</span>
      <div class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
        <span
          aria-hidden="true"
          className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
            open ? "rotate-45" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
            open ? "-rotate-45" : "translate-y-1.5"
          }`}
        ></span>
      </div>
    </button>
  );
};

export default Hamburger;
