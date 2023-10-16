import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
