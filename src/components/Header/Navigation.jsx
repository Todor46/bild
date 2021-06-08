import { NavLink } from "react-router-dom";
import { ABOUT, CONTACT, HOME, WORK } from "../../constants/routes";

const Navigation = () => {
  return (
    <>
      <NavLink to={HOME} exact>
        Home
      </NavLink>
      <NavLink to={ABOUT}>About</NavLink>
      <NavLink to={WORK}>Work</NavLink>
      <NavLink to={CONTACT}>Contact</NavLink>
    </>
  );
};

export default Navigation;
