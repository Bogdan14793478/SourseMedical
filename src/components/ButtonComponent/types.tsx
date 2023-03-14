export enum ButtonVariantEnum {
  contained = "contained",
  outlined = "outlined",
  danger = "danger",
}

export enum ButtonSizeEnum {
  medium = "medium", // 8x12
  small = "small", // 6x10
  large = "large", //12x42
  mediumLarge = "mediumLarge", //11x24
  verylarge = "verylarge", // 14x56
}

export enum BorderVariantEnum {
  primary = "primary", //blue
  secondary = "secondary", //gray
  tertiary = "tertiary", // red
  quaternary = "quaternary", // gray e4e4e4
  none = "none",
}

export enum ButtonColorTextEnum {
  primary = "primary", //blue
  secondary = "secondary", //gray
  tertiary = "tertiary", //white
  quaternary = "quaternary", // black
  quinary = "quinary", // grey 808191
}

export type ButtonProps = {
  color: ButtonColorTextEnum;
  border?: BorderVariantEnum;
  text: string;
  variant: ButtonVariantEnum;
  onClickEvent?: (id: string) => void;
  size?: ButtonSizeEnum;
  width?: "full" | "content";
  icon?: string;
  onClick?: any;
  className?: string;
};
