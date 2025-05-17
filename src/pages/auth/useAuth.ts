import { useFormik } from "formik";
import type { FormikHelpers } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

interface LoginValues {
  username: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required."),
});

const useAuth = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleLogin = async (
    values: LoginValues,
    { setSubmitting }: FormikHelpers<LoginValues>
  ) => {
    setSubmitting(true);
  
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
  
      const token = `auth-token-${Date.now()}`;
      localStorage.setItem("auth-token", token);
  
      toast.success("Sign in successful!");
  
      navigate("/");
    } catch (error) {
      console.error(error);
      setError("Login failed. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };
  

  const formik = useFormik<LoginValues>({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: handleLogin,
    enableReinitialize: true,
  });

  return {
    formik,
    error,
    showPassword,
    setShowPassword,
  };
};

export default useAuth;
