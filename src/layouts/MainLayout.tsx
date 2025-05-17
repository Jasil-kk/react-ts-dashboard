import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  return (
    <div className="w-full h-screen flex flex-col">
      <Header showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <div className="w-full max-w-full h-full flex overflow-auto">
        <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-auto h-full bg-[#FAFAFA]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
