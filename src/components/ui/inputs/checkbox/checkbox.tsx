import React from "react";
import { Label } from "./styles";

interface ICheckboxProps {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (args: any) => any;
}

const Checkbox: React.FC<ICheckboxProps> = ({ label, name, value, checked, onChange }) => {
  return  (
    <div>
      <input
        type="checkbox"
        name={name}
        value={value}
        id={name + "-" + value}
        checked={checked}
        onChange={onChange}
      />
      <Label htmlFor={name + "-" + value}>{label}</Label>
    </div>
  )
}

export default Checkbox;
