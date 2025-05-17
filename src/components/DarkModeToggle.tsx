import React from "react";
import { useUser } from "../context/UserContext";
import Switch from "./Switch/Switch";

const DarkModeToggle: React.FC = () => {
  const { darkMode, toggleDarkMode } = useUser();

  return (
    <div className="w-fit flex flex-col gap-2 bg-white dark:bg-black shadow p-5 rounded-md">
      <span className="text-gray-800 dark:text-gray-100">Dark Mode</span>
      <Switch checked={darkMode} onChange={toggleDarkMode} />
    </div>
  );
};

export default DarkModeToggle;
