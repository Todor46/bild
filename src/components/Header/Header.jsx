import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router";
import MainNavigation from "./MainNavigation";
import MobileNavigation from "./MobileNavigation";
import SocialBar from "./SocialBar";

const Header = memo(() => {
  const [navigationOpen, setNavigationOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setNavigationOpen(false);
    console.log(location);
  }, [location]);

  return (
    <div className="max-w-screen-lg flex items-center justify-between sm:block mx-auto sm:divide-y-2 py-[30px] px-4 lg:px-0">
      <div className="flex justify-between items-center sm:pb-[30px]">
        <div className="">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <SocialBar />
      </div>
      <MobileNavigation open={navigationOpen} setIsOpen={setNavigationOpen} />
      <MainNavigation />
    </div>
  );
});

export default Header;
