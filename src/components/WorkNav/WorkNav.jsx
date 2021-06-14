import { Listbox } from "@headlessui/react";
import { NavLink, useHistory, useParams } from "react-router-dom";
import {
  APPLICATIONS,
  PHOTOGRAPHY,
  PRINT,
  WEB,
  WORK,
} from "../../constants/routes";
import { ReactComponent as GridIcon } from "./img/grid_view.svg";
import { ReactComponent as ListIcon } from "./img/list_view.svg";
import { ReactComponent as Selector } from "./img/selector.svg";

const navigation = [
  {
    label: "All",
    path: WORK,
    exact: true,
    key: "",
  },
  {
    label: "Print",
    path: PRINT,
    key: "print",
  },
  {
    label: "Photography",
    path: PHOTOGRAPHY,
    key: "photography",
  },
  {
    label: "Web",
    path: WEB,
    key: "web",
  },
  {
    label: "Applications",
    path: APPLICATIONS,
    key: "applications",
  },
];

const WorkNav = ({ layout, setLayout }) => {
  const { category } = useParams();
  const history = useHistory();

  return (
    <div className="max-w-screen-lg mx-auto px-4 lg:px-0">
      <div className="relative">
        <Listbox
          className="sm:hidden"
          value={category}
          onChange={(e) => history.push(`${WORK}/${e}`)}
          as="div"
        >
          <Listbox.Button className="relative w-full border-2 border-green-500 pl-2 text-left">
            {navigation.find((nav) => nav.key === category)?.label || "All"}
            <Selector className="absolute right-0 top-1 h-4 w-4" />
          </Listbox.Button>
          <Listbox.Options className="border w-full absolute z-10 bg-white py-1 mt-1 drop-shadow-lg ">
            {navigation.map((link) => (
              <Listbox.Option
                key={link.key}
                value={link.key}
                className={({ active }) =>
                  `${active ? "bg-green-100" : ""} px-4 py-1 hover:bg-green-100`
                }
              >
                {({ selected }) => (
                  <span
                    className={`${
                      selected ? "text-green-500 font-semibold" : ""
                    }`}
                  >
                    {link.label}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      <div className="hidden sm:flex justify-between items-center">
        <ul className="work-navigation">
          {navigation.map((link) => (
            <li key={link.key}>
              <NavLink to={link.path} exact={link.exact}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex space-x-3 text-gray-600">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            className="hover:text-gray-400"
          >
            <GridIcon
              className={`fill-current ${
                layout === "grid" ? "text-green-500" : ""
              }`}
            />
          </button>
          <button
            type="button"
            onClick={() => setLayout("list")}
            className="hover:text-gray-400"
          >
            <ListIcon
              className={`fill-current ${
                layout === "list" ? "text-green-500" : ""
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkNav;
