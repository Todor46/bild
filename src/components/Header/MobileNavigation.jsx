import { Transition } from "@headlessui/react";
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
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 bg-white mobile-navigation">
          <Navigation />
        </div>
      </Transition>
    </div>
  );
};

export default MobileNavigation;
