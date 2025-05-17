import React from "react";

interface CancelButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  text?: string;
}

const CancelButton: React.FC<CancelButtonProps> = ({
  type = "button",
  onClick,
  disabled = false,
  text = "Cancel",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="w-28 h-10 bg-slate-100 hover:bg-slate-200 transition-all rounded-sm text-sm font-semibold text-gray-800 cursor-pointer disabled:cursor-not-allowed disabled:opacity-75 disabled:hover:bg-slate-100"
    >
      {text}
    </button>
  );
};

export default CancelButton;
