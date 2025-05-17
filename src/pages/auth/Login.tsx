import React, { useEffect } from "react";
import eyeOpen from "@assets/svg/eye-open.svg";
import eyeClose from "@assets/svg/eye-close.svg";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const { formik, error, showPassword, setShowPassword } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("auth-token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <div
      className={`w-full min-h-screen flex items-start justify-center py-10 px-[5%] overflow-auto bg-[#ecebeb]`}
    >
      <div className="my-auto flex flex-col items-center w-full max-w-[380px]">
        <div className="w-full bg-white rounded-lg shadow-2xl">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="mb-10 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Sign in
            </h1>
            <form
              onSubmit={formik.handleSubmit}
              className="space-y-4"
              noValidate
            >
              <div>
                <label
                  htmlFor="username"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="border border-gray-300 outline-0 text-gray-900 rounded-lg focus:border-[#0F60FF] block w-full p-2.5"
                  placeholder="Enter username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  disabled={formik.isSubmitting}
                  onBlur={formik.handleBlur}
                />
                <p className="text-red-500 text-sm font-normal ml-2">
                  {formik.touched.username && formik.errors.username
                    ? formik.errors.username
                    : error || ""}
                </p>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="w-full relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    className="border outline-0 border-gray-300 text-gray-900 rounded-lg focus:border-[#0F60FF] block w-full p-2.5"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    disabled={formik.isSubmitting}
                    onBlur={formik.handleBlur}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    <img src={showPassword ? eyeClose : eyeOpen} alt="" />
                  </button>
                </div>
                <p className="text-red-500 text-sm font-normal ml-2">
                  {formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : error || ""}
                </p>
              </div>
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="mt-5 cursor-pointer w-full text-white bg-[#0F60FF] hover:bg-[#0b54e6] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:cursor-not-allowed disabled:opacity-75 disabled:bg-[#0F60FF]"
              >
                {formik.isSubmitting ? "Loading..." : "Sign in"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
