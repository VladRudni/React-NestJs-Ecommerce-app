import { FC, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

import { Container } from "./Container";

interface Layout {
  children: ReactNode;
  header?: boolean;
  footer?: boolean;
}

export const Layout: FC<Layout> = ({
  children,
  footer = false,
  header = true,
}) => {
  return (
    <div>
      {header ? <Header /> : ""}
      <main>
        <Container>{children}</Container>
      </main>
      {footer ? <Footer /> : ""}
    </div>
  );
};
