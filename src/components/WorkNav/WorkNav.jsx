import { Link } from "react-router-dom";
import {
  APPLICATIONS,
  PHOTOGRAPHY,
  PRINT,
  WEB,
  WORK,
} from "../../constants/routes";
import { ReactComponent as GridIcon } from "./img/grid_view.svg";
import { ReactComponent as ListIcon } from "./img/list_view.svg";

const WorkNav = ({ layout, setLayout }) => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 lg:px-0">
      <div className="flex justify-between items-center">
        <ul className="work-navigation">
          <li>
            <Link to={WORK}>All</Link>
          </li>
          <li>
            <Link to={PRINT}>Print</Link>
          </li>
          <li>
            <Link to={PHOTOGRAPHY}>Photography</Link>
          </li>
          <li>
            <Link to={WEB}>Web</Link>
          </li>
          <li>
            <Link to={APPLICATIONS}>Applications</Link>
          </li>
        </ul>
        <div className="flex space-x-3 text-gray-600">
          <button type="button" onClick={() => setLayout("grid")}>
            <GridIcon
              className={`fill-current ${
                layout === "grid" ? "text-green-500" : ""
              }`}
            />
          </button>
          <button type="button" onClick={() => setLayout("list")}>
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
