import { useState } from "react";
import { useUser } from "../../context/UserContext";

interface FormState {
  name: string;
  email: string;
}

const useSettings = () => {
  const { name, email, updateProfile } = useUser();

  const [form, setForm] = useState<FormState>({
    name: name || "",
    email: email || "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile(form.name, form.email);
    console.log("Form Data:", form);
  };

  return {
    form,
    setForm,
    handleSubmit,
  };
};

export default useSettings;
