import React from "react";

interface PlusIconProps {
  width?: string;
  height?: string;
  className?: string;
  color?: string;
}

const PlusIcon: React.FC<PlusIconProps> = ({
  width = "15px",
  height = "15px",
  className,
  color = "#000000",
}) => {
  return (
    <svg
      className={className || ""}
      fill={color}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      id="plus"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="primary"
        d="M12,20a1,1,0,0,1-1-1V13H5a1,1,0,0,1,0-2h6V5a1,1,0,0,1,2,0v6h6a1,1,0,0,1,0,2H13v6A1,1,0,0,1,12,20Z"
      ></path>
    </svg>
  );
};

export default PlusIcon;
