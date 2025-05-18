import React from "react";
import useDashboard from "./useDashboard";
import CustomersIcon from "../../assets/icons/CustomersIcon";
import CountCard from "./CountCard";
import PendingIcon from "../../assets/icons/PendingIcon";
import ActiveIcon from "../../assets/icons/ActiveIcon";
import LineChart from "./LineChart";
import BarChart from "./BarChart";

interface CountItem {
  label: string;
  count: number | undefined;
  icon: React.ReactNode;
}

const Dashboard: React.FC = () => {
  const { counts } = useDashboard();

  const allCounts: CountItem[] = [
    { label: "Users", count: counts?.usersCount, icon: <CustomersIcon /> },
    {
      label: "Active Sessions",
      count: counts?.activeSessions,
      icon: <ActiveIcon />,
    },
    {
      label: "Pending Requests",
      count: counts?.pendingRequests,
      icon: <PendingIcon />,
    },
  ];

  return (
    <div className="w-full h-full overflow-auto p-5 pb-10 flex flex-col text-[#23272E] dark:text-[#ebebec]">
      <h1 className="text-[#23272E] dark:text-[#ffffff] font-bold text-2xl">
        Dashboard
      </h1>

      <div className="mt-5 w-full flex items-start gap-6 flex-wrap">
        {allCounts.map((item, idx) => (
          <CountCard
            key={idx}
            label={item.label}
            count={item.count}
            icon={item.icon}
          />
        ))}
      </div>
      <div className="mt-10 w-full sm:px-[5%]">
        <LineChart />
      </div>
      <div className="mt-10 w-full sm:px-[5%]">
        <BarChart />
      </div>
    </div>
  );
};

export default Dashboard;
