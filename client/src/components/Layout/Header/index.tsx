import { Link } from "react-router";
import { routes } from "../../../constants/routes";
import "./header.scss";

export const Header = () => {
  return (
    <header>
      <ul className="headerMenu">
        <Link to={routes.home}>home</Link>
        <Link to={routes.about}>about</Link>
      </ul>{" "}
    </header>
  );
};
