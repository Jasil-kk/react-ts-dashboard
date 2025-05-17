import React from "react";
import Modal from "../Modal/Modal";

interface DeleteConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  text?: string;
  onSubmit: () => void;
  loading?: boolean;
}

const DeleteConfirmation: React.FC<DeleteConfirmationProps> = ({
  isOpen,
  onClose,
  text = "",
  onSubmit,
  loading = false,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} width="max-w-[300px]">
      <div className="w-full flex flex-col items-center p-5">
        <h2 className="mt-2 text-base font-semibold text-center max-w-[250px]">
          {text}
        </h2>
        <div className="mt-5 ml-auto flex items-center gap-2">
          <button
            onClick={onClose}
            disabled={loading}
            className="w-16 h-7 bg-slate-100 hover:bg-slate-200 rounded-sm text-sm font-medium cursor-pointer transition-all disabled:cursor-not-allowed disabled:opacity-75 disabled:hover:bg-slate-100"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            disabled={loading}
            className="w-16 h-7 bg-red-500 hover:bg-red-600 text-slate-100 rounded-sm text-sm font-medium cursor-pointer transition-all disabled:cursor-not-allowed disabled:opacity-75 disabled:hover:bg-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteConfirmation;
