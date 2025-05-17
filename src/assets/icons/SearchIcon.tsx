import React from "react";

interface SearchIconProps {
  width?: string;
  height?: string;
  className?: string;
  color?: string;
}

const SearchIcon: React.FC<SearchIconProps> = ({
  width = "17",
  height = "17",
  className,
  color = "black",
}) => {
  return (
    <svg
      className={className || ""}
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.5">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.6939 12.5352C12.4237 11.3751 13.6962 8.2216 12.5361 5.49177C11.3759 2.76193 8.22245 1.48945 5.49261 2.6496C2.76278 3.80975 1.49029 6.96321 2.65045 9.69305C3.8106 12.4229 6.96406 13.6954 9.6939 12.5352Z"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11.3906 11.3896L15.556 15.5556"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default SearchIcon;
