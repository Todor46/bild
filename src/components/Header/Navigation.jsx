import { NavLink } from "react-router-dom";
import { ABOUT, CONTACT, HOME, WORK } from "../../constants/routes";

const Navigation = ({ asList }) => {
  const navigation = [
    {
      route: HOME,
      name: "Home",
      exact: true,
    },
    {
      route: ABOUT,
      name: "About",
      exact: false,
    },
    {
      route: WORK,
      name: "Work",
      exact: false,
    },
    {
      route: CONTACT,
      name: "Contact",
      exact: false,
    },
  ];

  return (
    <ul>
      {navigation.map((nav) => (
        <li>
          <NavLink to={nav.route} exact={nav.exact}>
            {nav.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
