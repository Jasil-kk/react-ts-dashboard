import { Suspense, lazy } from "react";
import type { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./routes";
import Loader from "../components/Loader/Loader";

const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
const MainLayout = lazy(() => import("../layouts/MainLayout"));
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Login = lazy(() => import("../pages/auth/Login"));

const MainRoute: FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path={ROUTES.PRIVATE.BASE}
          element={<Navigate to={ROUTES.PRIVATE.DASHBOARD} replace />}
        />

        <Route path={ROUTES.PRIVATE.DASHBOARD} element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            }
          />
          {/* Uncomment and add other nested routes here if needed */}
          {/* <Route
            path={ROUTES.PRIVATE.LATEST_INNOVATIONS}
            element={
              <Suspense fallback={<Loader />}>
                <LatestInnovations />
              </Suspense>
            }
          /> */}
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
