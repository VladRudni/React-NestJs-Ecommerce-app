import { type ButtonHTMLAttributes, type FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};
