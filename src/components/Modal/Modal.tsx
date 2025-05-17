import React, { useEffect, useState } from "react";
import type { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, width = "max-w-md" }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 bg-[#0000006e] bg-opacity-50 flex items-center transition-opacity duration-300 z-40 overflow-auto p-5 ${
        show ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`m-auto bg-white rounded-lg shadow-lg transform transition-transform duration-300 ${
          show ? "scale-100 opacity-100" : "scale-95 opacity-0"
        } w-full ${width} overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
