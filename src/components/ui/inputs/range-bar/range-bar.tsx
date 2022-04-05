import React from "react";

interface IRangeBarProps {
  min: number;
  max: number;
  name: string;
  value: string | number;
  label: string;
  onChange: (args: any) => any;
}

const RangeBar: React.FC<IRangeBarProps> = ({ min, max, name, value, label, onChange}) => {
  return (
    <div>
      <input
        type="range"
        name={name}
        min={min}
        max={max}
        value={value}
        id={name}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default RangeBar;
