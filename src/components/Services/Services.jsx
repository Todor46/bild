import { ReactComponent as WebsitesIcon } from "./img/websites.svg";
import { ReactComponent as PhotographyIcon } from "./img/photography.svg";
import { ReactComponent as SeoIcon } from "./img/seo.svg";
import { ReactComponent as ApplicationsIcon } from "./img/applications.svg";
import "./services.css";
import Tabs from "../Tabs/Tabs";

const Services = () => {
  const titleClasses =
    "text-xl font-semibold md:mt-[30px] uppercase hidden md:block";
  const tabContentClasses =
    "max-w-screen-lg px-4 lg:px-0 mx-auto text-sm text-gray-500 py-8";
  const iconClasses = "fill-current h-8 w-8 md:h-auto md:w-auto";

  const tabs = [
    {
      key: "websites",
      title: (
        <>
          <WebsitesIcon className={iconClasses} />
          <p className={titleClasses}>Websites</p>
        </>
      ),
    },
    {
      key: "photography",
      title: (
        <>
          <PhotographyIcon className={iconClasses} />
          <p className={titleClasses}>Photography</p>
        </>
      ),
    },
    {
      key: "seo",
      title: (
        <>
          <SeoIcon className={iconClasses} />
          <p className={titleClasses}>Seo</p>
        </>
      ),
    },
    {
      key: "applications",
      title: (
        <>
          <ApplicationsIcon className={iconClasses} />
          <p className={titleClasses}>Applications</p>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="bg-gray-100">
        <Tabs
          tabs={tabs}
          buttonClasses="flex flex-col items-center justify-center md:justify-end md:pb-10 hover:text-gray-700 hover:bg-gray-200"
          activeClass="bg-gray-200"
          tabsWrapperClasses="max-w-screen-lg mx-auto lg:px-0 grid grid-cols-4 h-20 md:h-[200px] text-gray-600"
        >
          {(activeTab) => {
            return (
              <>
                {activeTab === "websites" && (
                  <div className={tabContentClasses}>
                    <h4 className="md:hidden text-xl font-semibold mb-2">
                      Websites
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque eu erat lacus, vel congue mauris. Fusce velit
                      justo, faucibus eu sagittis ac, gravida quis tortor.
                      Suspendisse non urna mi, quis tincidunt eros. Nullam
                      tellus turpis, fringilla sit amet congue ut, luctus a
                      nulla. Donec sit amet sapien neque, id ullamcorper diam.
                      Nulla facilisi. Pellentesque pellentesque arcu a elit
                      congue lacinia.
                    </p>
                    <ol className="arrows-list pl-8 mt-5">
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        fringilla sit amet.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        luctus donec.
                      </li>
                    </ol>
                  </div>
                )}
                {activeTab === "photography" && (
                  <div className={tabContentClasses}>
                    <h4 className="md:hidden text-xl font-semibold mb-2">
                      Photography
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque eu erat lacus, vel congue mauris. Fusce velit
                      justo, faucibus eu sagittis ac, gravida quis tortor.
                      Suspendisse non urna mi, quis tincidunt eros.
                    </p>
                    <ol className="arrows-list pl-8 mt-5">
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        fringilla sit amet.
                      </li>
                    </ol>
                  </div>
                )}
                {activeTab === "seo" && (
                  <div className={tabContentClasses}>
                    <h4 className="md:hidden text-xl font-semibold mb-2">
                      SEO
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque eu erat lacus, vel congue mauris. Fusce velit
                      justo, faucibus eu sagittis ac, gravida quis tortor.
                      Suspendisse non urna mi, quis tincidunt eros. Nullam
                      tellus turpis, fringilla sit amet congue ut, luctus a
                      nulla.
                    </p>
                    <ol className="arrows-list pl-8 mt-5">
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                    </ol>
                  </div>
                )}
                {activeTab === "applications" && (
                  <div className={tabContentClasses}>
                    <h4 className="md:hidden text-xl font-semibold mb-2">
                      Applications
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque eu erat lacus, vel congue mauris. Fusce velit
                      justo, faucibus eu sagittis ac, gravida quis tortor.
                      Suspendisse non urna mi, quis tincidunt eros. Nullam
                      tellus turpis, fringilla sit amet congue ut, luctus a
                      nulla. Donec sit amet sapien neque, id ullamcorper diam.
                      Nulla facilisi. Pellentesque pellentesque arcu a elit
                      congue lacinia.
                    </p>
                    <ol className="arrows-list pl-8 mt-5">
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        fringilla sit amet.
                      </li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        luctus donec.
                      </li>
                    </ol>
                  </div>
                )}
              </>
            );
          }}
        </Tabs>
      </div>
    </>
  );
};

export default Services;
