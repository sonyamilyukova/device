import React from 'react';
import { StyledButton } from './styles';

export interface IButton {
  children: React.ReactNode;
  type?: string;
  width?: string;
  height?: string;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  as?: any;
  className?: string;
  highlighted?: boolean;
  light?: boolean;
  border?: boolean;
  onClick?: any;
}

const Button: React.FC<IButton> =
  ({ children,
     type,
     width,
     height,
     marginTop,
     marginRight,
     marginBottom,
     marginLeft,
     as,
     className,
     highlighted,
     light,
     border,
     onClick }) => {
  return (
    <StyledButton
      as={as}
      type={type}
      width={width}
      height={height}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      className={className}
      highlighted={highlighted}
      light={light}
      border={border}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
};

export default Button;