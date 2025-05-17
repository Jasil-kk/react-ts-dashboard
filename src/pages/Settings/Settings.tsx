import React from "react";
import DarkModeToggle from "../../components/DarkModeToggle";
import CustomInput from "../../components/CustomInput/CustomInput";
import useSettings from "./useSettings";

const Settings: React.FC = () => {
  const { form, setForm, handleSubmit } = useSettings();

  return (
    <div className="w-full h-full overflow-auto p-5 pb-10 flex flex-col">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
        Settings
      </h2>
      <div className="mt-6 w-full flex items-start gap-10 flex-wrap">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[400px] bg-white dark:bg-black shadow shadow-[#d1d0d0] dark:shadow-[#272727] rounded-md py-4 px-6 flex flex-col gap-5"
        >
          <CustomInput
            label="Name"
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />

          <CustomInput
            label="Email"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />

          <button
            type="submit"
            className="mt-5 cursor-pointer px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Save Changes
          </button>
        </form>
        <DarkModeToggle />
      </div>
    </div>
  );
};

export default Settings;
