import React from "react";

interface InputFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

const InputField = React.memo(function InputField({
  label,
  id,
  type = "text",
  placeholder,
  required,
}: InputFieldProps) {
  return (
    <div className={id === "remember-me" ? "remember-div" : "input-group"}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        required={required}
        className={id !== "remember-me" ? "sign-input" : ""}
      />
    </div>
  );
});

export default InputField;
