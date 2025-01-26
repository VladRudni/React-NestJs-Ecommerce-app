import { Link } from "react-router";
import { routes } from "../../../constants/routes";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <ul className="headerMenu">
        <Link to={routes.home}>home</Link>
        <Link to={routes.about}>about</Link>
      </ul>{" "}
    </header>
  );
};
