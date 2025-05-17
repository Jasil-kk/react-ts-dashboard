import { useState } from "react";

interface Counts {
  usersCount: number;
  activeSessions: number;
  pendingRequests: number;
}

const useDashboard = () => {
  const [counts, setCounts] = useState<Counts>({
    usersCount: 120,
    activeSessions: 45,
    pendingRequests: 8,
  });

  return {
    counts,
    setCounts,
  };
};

export default useDashboard;
