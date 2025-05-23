import React from "react";

interface CustomersIconProps {
  width?: string;
  height?: string;
  className?: string;
  color?: string;
}

const CustomersIcon: React.FC<CustomersIconProps> = ({
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
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="8.24992"
        cy="6.41667"
        rx="3.66667"
        ry="3.66667"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse
        cx="8.24992"
        cy="6.41667"
        rx="3.66667"
        ry="3.66667"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.75 19.25V17.4167C2.75 15.3916 4.39162 13.75 6.41667 13.75H10.0833C12.1084 13.75 13.75 15.3916 13.75 17.4167V19.25"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.75 19.25V17.4167C2.75 15.3916 4.39162 13.75 6.41667 13.75H10.0833C12.1084 13.75 13.75 15.3916 13.75 17.4167V19.25"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 2.86902C16.2892 3.28442 17.4239 4.74634 17.4239 6.4211C17.4239 8.09586 16.2892 9.55778 14.6667 9.97318"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.6667 2.86902C16.2892 3.28442 17.4239 4.74634 17.4239 6.4211C17.4239 8.09586 16.2892 9.55778 14.6667 9.97318"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.25 19.25V17.4166C19.2404 15.7525 18.1113 14.3035 16.5 13.8875"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.25 19.25V17.4166C19.2404 15.7525 18.1113 14.3035 16.5 13.8875"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CustomersIcon;
