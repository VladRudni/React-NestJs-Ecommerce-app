import { FC, ReactElement } from "react";
import styles from "./Section-title.module.scss";
interface SectionTitle {
  children: string;
}

export const SectionTitle: FC<SectionTitle> = ({ children }) => {
  return (
    <div className={styles.section__title}>
      <h3>{children}</h3>
    </div>
  );
};
