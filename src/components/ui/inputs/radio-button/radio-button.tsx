import React from "react";

interface IRadioButtonProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (args: any) => any;
}

const RadioButton: React.FC<IRadioButtonProps> = ({ label, name, value, checked, onChange }) => {
  return (
    <div>
      <input
        type="radio"
        name={name}
        value={value}
        id={name + "-" + value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name + "-" + value}>{label}</label>
    </div>
  )
}

export default RadioButton;
