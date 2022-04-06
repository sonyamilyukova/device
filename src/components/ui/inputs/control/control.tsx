import React from "react";
import { StyledControl, Input, Label } from "./styles";

interface IControlProps {
  label: string;
  type: "checkbox" | "radio";
  name: string;
  value: string;
  checked: boolean;
  onChange: (args: any) => any;
}

const Control: React.FC<IControlProps> = ({ label, type, name, value, checked, onChange }) => {
  return  (
    <StyledControl>
      <Input
        type={type}
        name={name}
        value={value}
        id={name + "-" + value}
        checked={checked}
        onChange={onChange}
      />
      <Label htmlFor={name + "-" + value}>
        {label}
      </Label>
    </StyledControl>
  )
}

export default Control;
