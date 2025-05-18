import React from "react";
import Modal from "../Modal/Modal";

interface LogoutConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  loading?: boolean;
}

const LogoutConfirmation: React.FC<LogoutConfirmationProps> = ({
  isOpen,
  onClose,
  onSubmit,
  loading = false,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} width="max-w-[300px]">
      <div className="w-full flex flex-col items-center p-5">
        <h2 className="mt-2 text-base font-medium text-center max-w-[200px] text-black dark:text-white">
          Are you sure you want to logout?
        </h2>
        <div className="mt-5 ml-auto flex items-center gap-2">
          <button
            onClick={onClose}
            disabled={loading}
            className="w-16 h-7 bg-slate-100 hover:bg-slate-200 dark:bg-[#383838] dark:hover:bg-[#444444] rounded-sm text-sm font-medium cursor-pointer transition-all disabled:cursor-not-allowed disabled:opacity-75 disabled:hover:bg-slate-100"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            disabled={loading}
            className="w-16 h-7 bg-red-500 hover:bg-red-600 text-slate-100 rounded-sm text-sm font-medium cursor-pointer transition-all disabled:cursor-not-allowed disabled:opacity-75 disabled:hover:bg-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutConfirmation;
