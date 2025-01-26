import { FC, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

import styles from "./Layout.module.scss";

interface ILayout {
  children: ReactNode;
  header?: boolean;
  footer?: boolean;
}

export const Layout: FC<ILayout> = ({
  children,
  footer = false,
  header = true,
}) => {
  return (
    <div>
      {header ? <Header /> : ""}
      <main>{children}</main>
      {footer ? <Footer /> : ""}
    </div>
  );
};
