import PageTitle from "../components/PageTitle/PageTitle";
import Map from "../components/Map/Map";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const schema = yup.object().shape({
    name: yup.string().required().max(100).label("Name"),
    email: yup.string().email().required().label("Email address"),
    subject: yup.string().max(100).label("Subject"),
    message: yup.string().required().max(1000).label("Message"),
  });
  const {
    register,
    formState: { errors, isSubmitSuccessful },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (e) => {
    console.log(e);
  };

  const inputClasses =
    "border-2 border-gray-500 px-[17px] mt-[15px] py-2 w-full sm:w-[350px] text-sm outline-none focus:border-gray-700";

  return (
    <>
      <PageTitle title="Got a question or inquiry?" />
      <Map />
      <div className="max-w-screen-lg mx-auto px-4 lg:px-0 sm:grid grid-cols-12 py-[50px]">
        <div className="col-span-7">
          {!isSubmitSuccessful ? (
            <>
              <h1 className="text-2xl font-semibold uppercase mb-5">
                Contact Form
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tincidunt dolor et tristique bibendum. Aenean sollicitudin vitae
                dolor ut posuere.
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className={inputClasses}
                  {...register("name")}
                />
                {errors.name && (
                  <div className="text-sm text-red-500 mt-1">
                    {errors.name.message}
                  </div>
                )}
                <input
                  type="text"
                  placeholder="Email address"
                  name="email"
                  className={inputClasses}
                  {...register("email")}
                />
                {errors.email && (
                  <div className="text-sm text-red-500 mt-1">
                    {errors.email.message}
                  </div>
                )}
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className={inputClasses}
                  {...register("subject")}
                />
                {errors.subject && (
                  <div className="text-sm text-red-500 mt-1">
                    {errors.subject.message}
                  </div>
                )}
                <textarea
                  name="message"
                  {...register("message")}
                  className="border-2 border-gray-500 px-[17px] mt-[15px] py-2 w-full h-56 resize-none text-sm  outline-none focus:border-gray-700"
                />
                {errors.message && (
                  <div className="text-sm text-red-500 mt-1">
                    {errors.message.message}
                  </div>
                )}
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-400 transition-colors text-white font-semibold uppercase text-sm px-4 py-2 mt-[15px]"
                >
                  {loading ? "sending" : "Send message"}
                </button>
              </form>
            </>
          ) : (
            <div className="h-full w-full flex flex-col items-center justify-center  text-green-500 text-center font-semibold">
              <p className="text-2xl mb-2">Form submited successfully!</p>
              <p>Thank you for reaching out</p>
            </div>
          )}
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
