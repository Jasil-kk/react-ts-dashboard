import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState<boolean>(true);

  const toggleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="w-full h-screen flex flex-col">
      <Header showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
      <div className="w-full max-w-full h-full flex overflow-auto">
        <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        <div className="flex-1 overflow-auto h-full bg-[#FAFAFA] dark:bg-[#1a1919]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
