import { ReactNode } from "react";

interface ListHeaderColProps {
  label: string;
  icon: ReactNode;
  className: string;
}

export default function ListHeaderCol({
  label,
  icon,
  className,
}: ListHeaderColProps) {
  return (
    <span className={className}>
      {icon}
      {label}
    </span>
  );
}
