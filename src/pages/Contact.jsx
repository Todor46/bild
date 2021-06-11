import PageTitle from "../components/PageTitle/PageTitle";
import Map from "../components/Map/Map";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submited");
  };

  const inputClasses =
    "border-2 border-gray-500 px-[17px] mb-[15px] py-2 w-full sm:w-[350px] text-sm outline-none focus:border-gray-700";

  return (
    <>
      <PageTitle title="Got a question or inquiry?" />
      <Map />
      <div className="max-w-screen-lg mx-auto px-4 lg:px-0 sm:grid grid-cols-12 py-[50px]">
        <div className="col-span-7">
          <h1 className="text-2xl font-semibold uppercase mb-5">
            Contact Form
          </h1>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            tincidunt dolor et tristique bibendum. Aenean sollicitudin vitae
            dolor ut posuere.
          </p>
          <form onSubmit={handleSubmit} className="mt-5">
            <input type="text" placeholder="Name" className={inputClasses} />
            <input
              type="text"
              placeholder="Email address"
              className={inputClasses}
            />
            <input type="text" placeholder="Subject" className={inputClasses} />
            <textarea className="border-2 border-gray-500 px-[17px] mb-[15px] py-2 w-full h-56 resize-none text-sm  outline-none focus:border-gray-700" />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-400 transition-colors text-white font-semibold uppercase text-sm px-4 py-2"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="col-span-4 col-start-9 text-sm mt-10 sm:mt-0">
          <h1 className="text-2xl font-semibold uppercase mb-4">
            Contact Info
          </h1>
          <p className="mb-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit velit justo.
          </p>
          <p className="">
            <span className="font-bold">email:</span>{" "}
            <a href="mailto:info@display.com" className="text-green-500">
              info@display.com
            </a>
          </p>
          <p className="mb-3">
            <span className="font-bold">phone:</span>
            <span>1.306.222.4545</span>
          </p>
          <p>222 2nd Ave South</p>
          <p>Saskabush, SK S7M 1T6</p>
          <h1 className="text-2xl font-semibold uppercase mb-4 mt-8">
            Store hours
          </h1>
          <div className="flex justify-between mb-1">
            <span>Monday - Thursday</span>
            <span>8 am - 5 pm</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Friday</span>
            <span>8 am - 6 pm</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Saturday</span>
            <span>8 am - 5 pm</span>
          </div>
          <div className="flex justify-between mb-1">
            <span>Sunday & Holidays</span>
            <span>Closed</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
