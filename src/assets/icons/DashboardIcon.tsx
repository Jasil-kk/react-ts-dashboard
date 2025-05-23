import React from "react";

interface DashboardIconProps {
  width?: string;
  height?: string;
  className?: string;
  color?: string;
}

const DashboardIcon: React.FC<DashboardIconProps> = ({
  width = "22",
  height = "22",
  className,
  color = "#23272E",
}) => {
  return (
    <svg
      className={className || ""}
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4167 7.98418L12.5281 4.18184C11.6456 3.49524 10.4095 3.49524 9.52696 4.18184L4.63746 7.98418C4.042 8.44725 3.69386 9.15943 3.69421 9.91376V16.5138C3.69421 17.5263 4.51503 18.3471 5.52755 18.3471H16.5275C17.5401 18.3471 18.3609 17.5263 18.3609 16.5138V9.91376C18.3609 9.15934 18.0125 8.44709 17.4167 7.98418"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 13.7499C12.6409 14.9718 9.35737 14.9718 7.33337 13.7499"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DashboardIcon;
