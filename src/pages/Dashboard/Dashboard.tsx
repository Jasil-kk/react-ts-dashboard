import React from "react";
import useDashboard from "./useDashboard";
import CustomersIcon from "../../assets/icons/CustomersIcon";

interface CountItem {
  label: string;
  count: number | undefined;
}

const Dashboard: React.FC = () => {
  const { counts } = useDashboard();

  const allCounts: CountItem[] = [
    { label: "Users", count: counts?.usersCount },
    { label: "Active Sessions", count: counts?.activeSessions },
    { label: "Pending Requests", count: counts?.pendingRequests },
  ];

  return (
    <div className="w-full h-full overflow-auto p-5 pb-10 flex flex-col">
      <h1 className="text-[#23272E] font-bold text-2xl">Dashboard</h1>

      <div className="mt-5 w-full flex items-start gap-6 flex-wrap">
        {allCounts.map((item, idx) => (
          <div
            key={idx}
            style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
            className="w-full max-w-[300px] bg-white rounded-2xl p-5 flex items-center justify-between flex-wrap gap-5"
          >
            <div>
              <p className="text-[#23272E] text-base font-medium">{item.label}</p>
              <p className="mt-1 text-[#23272E] text-2xl font-bold">{item.count}</p>
            </div>
            <div className="w-12 h-12 bg-slate-100 rounded-full grid place-items-center">
              <CustomersIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
