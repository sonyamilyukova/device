import React from 'react';
import { StyledButton } from './styles';

export interface IButton {
  children: React.ReactNode;
  type?: string;
  width?: string;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  marginLeft?: number;
  as?: any;
  className?: string;
  highlighted?: boolean;
  light?: boolean;
  onClick?: any;
}

const Button: React.FC<IButton> =
  ({ children,
     type,
     width,
     marginTop,
     marginRight,
     marginBottom,
     marginLeft,
     as,
     className,
     highlighted,
     light,
     onClick }) => {
  return (
    <StyledButton
      as={as}
      type={type}
      width={width}
      marginTop={marginTop}
      marginRight={marginRight}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      className={className}
      highlighted={highlighted}
      light={light}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  )
};

export default Button;