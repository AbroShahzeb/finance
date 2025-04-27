import { IconCaretRight } from "../../assets/svgAssets";

interface Props {
  variant?: "primary" | "secondary" | "tertiary" | "destroy";
  className?: string;
  tertiaryIcon?: React.ReactNode;
  label?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  variant = "primary",
  className = "",
  tertiaryIcon = <IconCaretRight />,
  label = "Label",
  onClick = () => {},
  type = "button",
}: Props) => {
  const variants = {
    primary: "text-white bg-grey-900 hover:bg-grey-500 p-4 rounded-lg",
    secondary:
      "text-grey-900 bg-beige-100 border border-transparent hover:bg-transparent hover:border-beige-500 p-4 rounded-lg",
    tertiary: "text-grey-500 hover:text-grey-900",
    destroy: "bg-red hover:bg-red/80 text-white p-4 rounded-lg",
  };

  return (
    <button
      onClick={onClick}
      type={type}
      className={`${variants[variant]} ${className} flex items-center gap-4 text-preset-4 font-bold transition-all`}
    >
      {label}
      {variant === "tertiary" && tertiaryIcon}
    </button>
  );
};
