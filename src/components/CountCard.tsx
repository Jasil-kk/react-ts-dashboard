import React from "react";
import type { ReactNode } from "react";

interface CountCardProps {
  label: string;
  count?: number;
  icon: ReactNode;
}

const CountCard: React.FC<CountCardProps> = ({ label, count, icon }) => {
  return (
    <div className="w-full max-w-[300px] bg-white dark:bg-[#070707] rounded-2xl p-5 flex items-center justify-between flex-wrap gap-5 border-2 border-[#d1d0d0] dark:border-[#383838]">
      <div>
        <p className="text-base font-medium">{label}</p>
        <p className="mt-1 text-2xl font-bold">{count ?? 0}</p>
      </div>
      <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900 rounded-full grid place-items-center">
        {icon}
      </div>
    </div>
  );
};

export default CountCard;
