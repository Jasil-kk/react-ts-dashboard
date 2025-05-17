import React from "react";
import Modal from "../../components/Modal/Modal";
import SubmitButton from "../../components/Buttons/SubmitButton";
import CancelButton from "../../components/Buttons/CancelButton";
import CustomInput from "../../components/CustomInput/CustomInput";
import CrossIcon from "../../assets/icons/CrossIcon";
import type { FormikProps } from "formik";

interface FormValues {
  name: string;
  email: string;
  company_name: string;
}

interface AddUserProps {
  isOpen: boolean;
  onClose: () => void;
  formik: FormikProps<FormValues>;
}

const AddUser: React.FC<AddUserProps> = ({ isOpen, onClose, formik }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-full p-5 relative">
        <button
          onClick={onClose}
          type="button"
          className="absolute top-3 right-3 cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-900 p-1 rounded"
        >
          <CrossIcon />
        </button>
        <h2 className="text-slate-900 dark:text-slate-200 font-semibold text-lg">Add User</h2>
        <form
          onSubmit={formik.handleSubmit}
          className="mt-5 w-full flex flex-col gap-3"
        >
          <CustomInput
            label="Name"
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter name"
            error={(formik.touched.name && formik.errors.name) || ""}
          />
          <CustomInput
            label="Email"
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter email"
            error={(formik.touched.email && formik.errors.email) || ""}
          />
          <CustomInput
            label="Company Name"
            type="text"
            id="company_name"
            name="company_name"
            value={formik.values.company_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter company name"
            error={
              (formik.touched.company_name && formik.errors.company_name) || ""
            }
          />
          <div className="mt-6 w-full flex justify-end gap-3">
            <CancelButton
              type="button"
              text="Cancel"
              onClick={onClose}
              disabled={formik.isSubmitting}
            />
            <SubmitButton
              type="submit"
              text={formik.isSubmitting ? "Loading..." : "Submit"}
              disabled={formik.isSubmitting}
            />
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddUser;
