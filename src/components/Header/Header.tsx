import React from "react";
import userImage from "../../assets/png/user.png";
import MenuIcon from "../../assets/icons/MenuIcon";
import { useUser } from "../../context/UserContext";

interface HeaderProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { name, email, darkMode } = useUser();

  return (
    <div className="w-full h-[70px] bg-[#FFFFFF] dark:bg-[#0f0f0f] flex items-center justify-between px-5 transition-all">
      <div className="flex items-center gap-8">
        <button
          onClick={toggleSidebar}
          className="hidden md:block cursor-pointer w-fit h-fit rounded-sm hover:bg-slate-100 transition-all"
        >
          <MenuIcon
            color={darkMode ? "#8B909A" : "#202224"}
            width="22"
            height="22"
          />
        </button>
      </div>
      <div className="flex items-center gap-1.5">
        <div className="text-right text-[#000000] dark:text-[#ecebeb]">
          <p className="text-base font-semibold max-w-[200px] overflow-hidden whitespace-nowrap overflow-ellipsis">
            {name}
          </p>
          <p className="text-sm font-normal max-w-[200px] overflow-hidden whitespace-nowrap overflow-ellipsis">
            {email}
          </p>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
          <img src={userImage} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Header;
