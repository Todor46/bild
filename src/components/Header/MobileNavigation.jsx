import { Dialog, Transition } from "@headlessui/react";
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
        <Dialog onClose={() => setIsOpen(false)}>
          <div className="fixed z-10 inset-0 h-screen flex flex-col items-center justify-center bg-white mobile-navigation">
            <div className="absolute top-9 right-[16px]">
              <Hamburger open={open} setIsOpen={setIsOpen} />
            </div>
            <Navigation />
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MobileNavigation;
