import { Link } from "react-router";
import styles from "./Header.module.scss";
import { routes } from "../../../config/routes";
import { CartIcon } from "../../../assets/icon/cart";
import { WishList } from "../../../assets/icon/wishlist";
import { Container } from "../Container";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header__row}>
          <div className={styles.header__logo}>
            <Link to={routes.home}>Exclusive</Link>
          </div>
          <nav className={styles.header__menu}>
            <ul>
              <li>
                <Link to={routes.home}>Home</Link>
              </li>
              <li>
                <Link to={routes.contacts}>Contact</Link>
              </li>
              <li>
                <Link to={routes.about}>About</Link>
              </li>
              <li>
                <Link to={routes.auth.login}>Sign Up</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.header__tools}>
            <Link to={routes.clientRoutes.wishlist}>
              <WishList />
            </Link>
            <Link to={routes.clientRoutes.backet}>
              <CartIcon />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
