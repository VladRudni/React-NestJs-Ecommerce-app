import { FC } from "react";
import styles from "./Title.module.scss";

interface Title {
  children: string;
}

export const Title: FC<Title> = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};
