import { useState } from "react";

const Tabs = ({
  tabs = [],
  buttonClasses,
  activeClass,
  tabsWrapperClasses,
  children,
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0].key);

  return (
    <>
      <div className={tabsWrapperClasses}>
        {tabs.map((tab) => {
          return (
            <button
              className={`${buttonClasses} ${
                activeTab === tab.key ? activeClass : ""
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      {children(activeTab)}
    </>
  );
};

export default Tabs;
