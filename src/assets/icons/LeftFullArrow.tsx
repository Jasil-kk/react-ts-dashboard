import React from "react";

interface LeftFullArrowProps {
  width?: string;
  height?: string;
  className?: string;
  color?: string;
}

const LeftFullArrow: React.FC<LeftFullArrowProps> = ({
  width = "20px",
  height = "20px",
  className,
  color = "#5C5F62",
}) => {
  return (
    <svg
      className={className || ""}
      width={width}
      height={height}
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 9H5.414l3.293-3.293a.999.999 0 10-1.414-1.414l-5 5a.999.999 0 000 1.414l5 5a.997.997 0 001.414 0 .999.999 0 000-1.414L5.414 11H17a1 1 0 100-2z"
        fill={color}
      />
    </svg>
  );
};

export default LeftFullArrow;
