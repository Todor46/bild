import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import Hamburger from "../Hamburger/Hamburger";
import Navigation from "./Navigation";

const MobileNavigation = ({ open, setIsOpen }) => {
  return (
    <div className="sm:hidden">
      <Hamburger open={open} setIsOpen={setIsOpen} />
      <Transition
        show={open}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        as={Fragment}
      >
        <div className="fixed z-10 inset-0 h-screen flex flex-col items-center justify-center bg-white mobile-navigation">
          <Navigation />
        </div>
      </Transition>
    </div>
  );
};

export default MobileNavigation;
