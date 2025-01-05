import { ReactNode } from "react";

interface Props {
  color?: string;
  functionality: string;
  type: "submit" | "button";
  children: ReactNode;
  onClick?: () => void;
}

export default function Button({
  color,
  functionality,
  type,
  children,
  onClick,
}: Props) {
  return (
    <button
      className={`${functionality} ${color}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
