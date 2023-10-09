import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
