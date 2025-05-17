import { Suspense, lazy } from "react";
import type { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import Loader from "../components/Loader/Loader";

const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Users = lazy(() => import("../pages/Users/Users"));
const Settings = lazy(() => import("../pages/Settings/Settings"));
const Login = lazy(() => import("../pages/auth/Login"));

const MainRoute: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path={ROUTES.PRIVATE.BASE}
          element={<Navigate to={ROUTES.PRIVATE.DASHBOARD} replace />}
        />

        <Route path={ROUTES.PRIVATE.BASE} element={<MainLayout />}>
          <Route
            path={ROUTES.PRIVATE.DASHBOARD}
            element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.PRIVATE.USERS}
            element={
              <Suspense fallback={<Loader />}>
                <Users />
              </Suspense>
            }
          />
          <Route
            path={ROUTES.PRIVATE.SETTINGS}
            element={
              <Suspense fallback={<Loader />}>
                <Settings />
              </Suspense>
            }
          />
        </Route>

        <Route
          path={ROUTES.AUTH.LOGIN}
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />

        <Route
          path={ROUTES.ERROR.NOT_FOUND}
          element={
            <Suspense fallback={<Loader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default MainRoute;
