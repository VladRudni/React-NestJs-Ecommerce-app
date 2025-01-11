import { ButtonHTMLAttributes, FC } from "react";

enum ButtonVAriantes {
  regular = "REGULAR",
  outline = "OUTLINE",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonId: string;
  variant?: ButtonVAriantes;
}

export const Button: FC<ButtonProps> = ({
  children,
  buttonId,
  variant = ButtonVAriantes.regular,
}) => {
  return <button className={buttonId + variant}>{children}</button>;
};
