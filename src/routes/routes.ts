export const ROUTES = {
  PRIVATE: {
    BASE: "/",
    DASHBOARD: "/dashboard",
    USERS: "/users",
    SETTINGS: "/settings",
  },
  AUTH: {
    LOGIN: "/login",
  },
  ERROR: {
    NOT_FOUND: "*",
  },
} as const;

export type Routes = typeof ROUTES;
