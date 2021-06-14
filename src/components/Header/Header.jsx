import { memo, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { HOME } from "../../constants/routes";
import MainNavigation from "./MainNavigation";
import MobileNavigation from "./MobileNavigation";
import SocialBar from "./SocialBar";

const Header = memo(() => {
  const [navigationOpen, setNavigationOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setNavigationOpen(false);
  }, [location]);

  return (
    <div className="max-w-screen-lg flex items-center justify-between sm:block mx-auto sm:divide-y-2 py-[30px] px-4 lg:px-0">
      <div className="flex justify-between items-center sm:pb-[30px]">
        <Link to={HOME}>
          <img src="/images/logo.png" alt="logo" />
        </Link>
        <SocialBar />
      </div>
      <MobileNavigation open={navigationOpen} setIsOpen={setNavigationOpen} />
      <MainNavigation />
    </div>
  );
});

export default Header;
