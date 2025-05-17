import React from "react";
import type { ChangeEvent, FocusEvent } from "react";

interface CustomInputProps {
  label?: string;
  type?: string;
  id?: string;
  name?: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  type = "text",
  id,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  disabled = false,
}) => {
  return (
    <div className="w-full flex flex-col items-start">
      {label && (
        <label
          htmlFor={id}
          className="text-[#000000c0] dark:text-[#b4b2b2c0] font-medium text-sm mb-1"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        className="w-full h-10 px-3 text-sm bg-transparent dark:bg-[#202020] outline-0 border border-gray-200 dark:border-gray-900 focus:border-[#000000] dark:focus:border-[#cfcfcf] rounded-md text-black dark:text-white"
      />
      {error && <p className="text-xs text-red-500 font-normal">{error}</p>}
    </div>
  );
};

export default CustomInput;
