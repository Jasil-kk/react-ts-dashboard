import React from "react";

interface AddButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

const AddButton: React.FC<AddButtonProps> = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#2b88c5] hover:bg-[#2578b0] min-w-fit h-[38px] px-3 flex items-center justify-center gap-2 text-[#FFFFFF] text-sm font-medium rounded-md cursor-pointer transition-all ${className}`}
    >
      <span className="text-xl font-bold">+</span> {text}
    </button>
  );
};

export default AddButton;
