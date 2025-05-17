import React from "react";

interface SwitchProps {
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {
  return (
    <div className="checkbox-wrapper-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="sc-gJwTLC ikxBAC"
      />
    </div>
  );
};

export default Switch;
