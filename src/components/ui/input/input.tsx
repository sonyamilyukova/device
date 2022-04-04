import React from 'react';
import { Wrapper, Label, StyledInput } from './styles';

export interface IInput {
  type: string;
  label: string;
  placeholder?: string;
  width?: string;
  marginTop?: number;
  marginBottom?: number;
  icon?: string;
  span?: string;
  value?: string;
  onChange?: (params: any) => any;
}

const Input: React.FC<IInput> =
  ({ type,
     label,
     placeholder,
     width,
     marginTop,
     marginBottom,
     icon,
     span,
     value,
     onChange }) => {
  return (
    <Wrapper width={width} marginTop={marginTop} marginBottom={marginBottom}>
      <Label>{label}</Label>
      <StyledInput
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Wrapper>
  )
}

export default Input;
