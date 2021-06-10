import { ReactComponent as WebsitesIcon } from "./img/websites.svg";
import { ReactComponent as PhotographyIcon } from "./img/photography.svg";
import { ReactComponent as SeoIcon } from "./img/seo.svg";
import { ReactComponent as ApplicationsIcon } from "./img/applications.svg";
import { useState } from "react";
import "./services.css";

const Services = () => {
  const [activeTab, setActiveTab] = useState("websites");

  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-screen-lg mx-auto lg:px-0 grid grid-cols-4 h-[200px] text-gray-600">
          <button
            className={`flex flex-col items-center justify-center md:justify-end md:pb-10 hover:text-gray-500 hover:bg-gray-200 ${
              activeTab === "websites" ? "bg-gray-200" : ""
            }`}
            onClick={() => setActiveTab("websites")}
          >
            <WebsitesIcon className="fill-current" />
            <p className="text-xl font-semibold md:mt-[30px] uppercase hidden md:block">
              Websites
            </p>
          </button>
          <button
            className="flex flex-col items-center justify-end pb-10 hover:text-gray-500 hover:bg-gray-200"
            onClick={() => setActiveTab("photography")}
          >
            <PhotographyIcon className="fill-current" />
            <p className="text-xl font-semibold mt-[30px] uppercase">
              Photography
            </p>
          </button>
          <button
            className="flex flex-col items-center justify-end pb-10 hover:text-gray-500 hover:bg-gray-200"
            onClick={() => setActiveTab("seo")}
          >
            <SeoIcon className="fill-current" />
            <p className="text-xl font-semibold mt-[30px] uppercase">Seo</p>
          </button>
          <button
            className="flex flex-col items-center justify-end pb-10 hover:text-gray-500 hover:bg-gray-200"
            onClick={() => setActiveTab("applications")}
          >
            <ApplicationsIcon className="fill-current" />
            <p className="text-xl font-semibold mt-[30px] uppercase">
              Applications
            </p>
          </button>
        </div>
      </div>
      {activeTab === "websites" && (
        <div className="max-w-screen-lg px-4 lg:px-0 mx-auto text-sm text-gray-500 py-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
            faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
            mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
            congue ut, luctus a nulla. Donec sit amet sapien neque, id
            ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
            elit congue lacinia.
          </p>
          <ol className="arrows-list pl-8 mt-5">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla
              sit amet.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus
              donec.
            </li>
          </ol>
        </div>
      )}
      {activeTab === "photography" && (
        <div className="max-w-screen-lg px-4 lg:px-0 mx-auto text-sm text-gray-500 py-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
            faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
            mi, quis tincidunt eros.
          </p>
          <ol className="arrows-list pl-8 mt-5">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla
              sit amet.
            </li>
          </ol>
        </div>
      )}
      {activeTab === "seo" && (
        <div className="max-w-screen-lg px-4 lg:px-0 mx-auto text-sm text-gray-500 py-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
            faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
            mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
            congue ut, luctus a nulla.
          </p>
          <ol className="arrows-list pl-8 mt-5">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          </ol>
        </div>
      )}
      {activeTab === "applications" && (
        <div className="max-w-screen-lg px-4 lg:px-0 mx-auto text-sm text-gray-500 py-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo,
            faucibus eu sagittis ac, gravida quis tortor. Suspendisse non urna
            mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet
            congue ut, luctus a nulla. Donec sit amet sapien neque, id
            ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a
            elit congue lacinia.
          </p>
          <ol className="arrows-list pl-8 mt-5">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit fringilla
              sit amet.
            </li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus
              donec.
            </li>
          </ol>
        </div>
      )}
    </>
  );
};

export default Services;
