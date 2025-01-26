import { FC, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface ILayout {
  children: ReactNode;
  header?: boolean;
  footer?: boolean;
}

export const Layout: FC<ILayout> = ({
  children,
  footer = true,
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
