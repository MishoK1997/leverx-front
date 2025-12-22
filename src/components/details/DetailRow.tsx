import { ReactNode, memo } from "react";

interface DetailRowProps {
  label: string;
  icon?: ReactNode;
  value: string | number | undefined;
  isEditing?: boolean;
  editKey?: string;
  onChange?: (key: string, value: string) => void;
  type?: "text" | "number" | "date" | "email" | "tel";
  href?: string;
}

export const DetailRow = memo(
  ({
    label,
    icon,
    value = "",
    isEditing = false,
    editKey,
    onChange,
    type = "text",
    href,
  }: DetailRowProps) => {
    const showInput = isEditing && editKey && onChange;

    return (
      <li>
        <span>
          {icon} {label}:
        </span>

        {showInput ? (
          <input
            className="edit-user-class"
            type={type}
            value={value}
            onChange={(e) => onChange(editKey!, e.target.value)}
          />
        ) : href ? (
          <a href={href}>{value}</a>
        ) : (
          <span>{value}</span>
        )}
      </li>
    );
  },
);
