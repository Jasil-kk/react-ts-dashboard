import React from "react";

interface SubmitButtonProps {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  text?: string;
  onClick?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  type = "submit",
  disabled = false,
  text = "Submit",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className="w-28 h-10 transition-all rounded-sm text-sm font-semibold text-slate-100 cursor-pointer disabled:cursor-not-allowed disabled:opacity-75 bg-[#25b09b] hover:bg-[#179c88]"
    >
      {text}
    </button>
  );
};

export default SubmitButton;
