import { type ButtonHTMLAttributes, type FC } from "react";
import styles from "./Button.module.scss";
import cn from "../../../utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  position?: "left" | "right" | "center";
}

export const Button: FC<ButtonProps> = ({
  children,
  position = "left",
  ...rest
}) => {
  return (
    <button className={cn(styles.button, position)} {...rest}>
      {children}
    </button>
  );
};
