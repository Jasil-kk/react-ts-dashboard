import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="w-full h-screen grid place-items-center bg-slate-100 dark:bg-[#000000]">
      <div className="loader">&nbsp;</div>
    </div>
  );
};

export default Loader;
