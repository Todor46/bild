import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { ReactComponent as Play } from "./img/play.svg";

const Video = () => {
  const [open, setOpen] = useState(false);

  const videoRef = useRef();

  return (
    <>
      <div
        className="w-full pt-[56.25%] bg-[#f39c12] col-span-5 relative text-white text-opacity-50 hover:text-opacity-80 cursor-pointer z-[1]"
        onClick={() => setOpen(true)}
      >
        <Play className="fill-current absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <span className="w-full h-5 bg-white opacity-30 absolute bottom-0"></span>
      </div>
      <Transition show={open} appear as={Fragment}>
        <Dialog
          onClose={() => setOpen(false)}
          className="fixed inset-0 flex items-center justify-center"
          initialFocus={videoRef}
        >
          <Transition.Child
            as={"div"}
            enter="duration-100"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-50"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-100 "
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-50"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="modal z-10">
              <div className="flex justify-end">
                <button
                  className="flex items-center justify-center p-2"
                  onClick={() => setOpen(false)}
                >
                  <span className="h-6 w-[2px] bg-white transform rotate-45"></span>
                  <span className="h-6 w-[2px] bg-white transform -rotate-45 -translate-x-0.5"></span>
                </button>
              </div>
              <iframe
                ref={videoRef}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default Video;
