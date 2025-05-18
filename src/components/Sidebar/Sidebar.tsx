import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import LogoutConfirmation from "../Confirmation/LogoutConfirmation";
import DashboardIcon from "../../assets/icons/DashboardIcon";
import CustomersIcon from "../../assets/icons/CustomersIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import type { ReactElement } from "react";
import { useUser } from "../../context/UserContext";

interface SidebarProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

interface NavLink {
  text: string;
  icon: (color: string) => ReactElement;
  link: string;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar }) => {
  const { darkMode } = useUser();

  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navLinks: NavLink[] = [
    {
      text: "Dashboard",
      icon: (color) => <DashboardIcon color={color} />,
      link: "/dashboard",
    },
    {
      text: "Users",
      icon: (color) => <CustomersIcon color={color} />,
      link: "/users",
    },
    {
      text: "Settings",
      icon: (color) => <SettingsIcon color={color} />,
      link: "/settings",
    },
  ];

  const handleLogout = async () => {
    localStorage.removeItem("auth-token");
    navigate("/login");
  };

  return (
    <div
      className={`${
        showSidebar ? "w-14 md:w-[200px]" : "w-14"
      } transition-all overflow-hidden h-full bg-[#FFFFFF] dark:bg-[#0f0f0f]`}
    >
      <ul
        className={`w-full h-full overflow-auto flex flex-col gap-3 ${
          showSidebar ? "px-2 md:px-3" : "px-2"
        } py-6`}
      >
        {navLinks.map((item, index) => {
          const isActive = location.pathname === item.link;
          return (
            <li
              key={index}
              onClick={() => navigate(item.link)}
              className={`w-full h-10 flex items-center list-none rounded-[6px] cursor-pointer transition-all ${
                isActive
                  ? `bg-[#2584b0]`
                  : "hover:bg-slate-100 dark:hover:bg-gray-800"
              } ${
                showSidebar
                  ? "justify-center md:justify-start px-0 md:px-2.5 gap-0 md:gap-2.5"
                  : "justify-center px-0 gap-0"
              }`}
            >
              {item.icon(isActive ? "#ffffff" : "#8B909A")}
              <p
                className={`hidden md:block text-sm font-medium transition-all whitespace-nowrap duration-300 ease-in-out ${
                  showSidebar
                    ? "opacity-100 w-auto"
                    : "opacity-0 w-0 overflow-hidden"
                } ${isActive ? "text-white" : "text-[#8B909A]"}`}
              >
                {item.text}
              </p>
            </li>
          );
        })}

        <li
          onClick={() => setIsModalOpen(true)}
          className={`mt-auto w-full h-10 flex items-center list-none rounded-[6px] cursor-pointer transition-all hover:bg-slate-100 dark:hover:bg-slate-900 ${
            showSidebar
              ? "justify-center md:justify-start px-0 md:px-2.5 gap-0 md:gap-2.5"
              : "px-0 justify-center gap-0"
          }`}
        >
          <LogoutIcon color={darkMode ? "#8B909A" : "#000000"} />
          <p
            className={`hidden md:block text-sm font-semibold transition-all whitespace-nowrap duration-300 ease-in-out text-[#111111] dark:text-[#bdbcbc] ${
              showSidebar
                ? "opacity-100 w-auto"
                : "opacity-0 w-0 overflow-hidden"
            }`}
          >
            Logout
          </p>
        </li>
      </ul>
      <LogoutConfirmation
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleLogout}
      />
    </div>
  );
};

export default Sidebar;
