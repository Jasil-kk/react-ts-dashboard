import React from "react";

interface EditIconProps {
  width?: string;
  height?: string;
  className?: string;
  color?: string;
}

const EditIcon: React.FC<EditIconProps> = ({
  width = "22",
  height = "22",
  className,
  color = "#8B909A",
}) => {
  return (
    <svg
      className={className || ""}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 7H6C4.89543 7 4 7.89543 4 9V18C4 19.1046 4.89543 20 6 20H15C16.1046 20 17 19.1046 17 18V15"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 15H12L20.5 6.49998C21.3284 5.67156 21.3284 4.32841 20.5 3.49998C19.6716 2.67156 18.3284 2.67156 17.5 3.49998L9 12V15"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 5L19 8"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EditIcon;
