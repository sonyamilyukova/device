import React from "react";
import { RangeBar, Label } from "./styles";

interface IRangeBarProps {
  min: number;
  max: number;
  name: string;
  value: string | number;
  label: string;
  onChange: (args: any) => any;
}

const Range: React.FC<IRangeBarProps> = ({ min, max, name, value, label, onChange}) => {
  return (
    <div>
      <RangeBar
        type="range"
        name={name}
        min={min}
        max={max}
        step={10}
        value={value}
        id={name}
        onChange={onChange}
      />
      <Label htmlFor={name}>{label + " " + value}</Label>
    </div>
  )
}

export default Range;
