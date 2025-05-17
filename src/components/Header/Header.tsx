import React from "react";
import userImage from "../../assets/png/user.png";
import MenuIcon from "../../assets/icons/MenuIcon";

interface HeaderProps {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <div className="w-full h-[70px] bg-[#FFFFFF] flex items-center justify-between px-5">
      <div className="flex items-center gap-8">
        <button
          onClick={toggleSidebar}
          className="hidden md:block cursor-pointer w-fit h-fit rounded-sm hover:bg-slate-100 transition-all"
        >
          <MenuIcon color="#202224" width="22" height="22" />
        </button>
      </div>
      <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200">
        <img src={userImage} alt="" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Header;
