import { ReactNode } from "react";

interface HeaderButtonProps {
  label?: string;
  src?: string;
  iconElement?: ReactNode;
  altText?: string;
  onClick?: () => void;
  className?: string;
}
// Common dynamic button for user porfile
export default function HeaderButton({
  label,
  src,
  altText,
  iconElement,
  onClick,
  className,
}: HeaderButtonProps) {
  return (
    <button type="button" className={className} onClick={onClick}>
      {src && <img src={src} alt={altText} />}
      {iconElement && iconElement}
      {label && <span className="btn-text">{label}</span>}
    </button>
  );
}
