import React from "react";
import type { ChangeEvent, FocusEvent } from "react";

interface CustomTextareaProps {
  label?: string;
  id?: string;
  name?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string;
  disabled?: boolean;
  rows?: number;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({
  label,
  id,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  disabled = false,
  rows = 4,
}) => {
  return (
    <div className="w-full flex flex-col items-start">
      {label && (
        <label
          htmlFor={id}
          className="text-[#000000c0] font-medium text-sm mb-0.5"
        >
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-3 py-2 text-sm bg-transparent outline-0 border border-gray-200 focus:border-[#000000] rounded-md resize-none"
      />
      {error && <p className="text-xs text-red-500 font-normal">{error}</p>}
    </div>
  );
};

export default CustomTextarea;
