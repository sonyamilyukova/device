import React from 'react';
import { StyledAlert } from "./styles";

export interface IAlert {
  children: React.ReactNode;
  marginTop?: number;
  marginBottom?: number;
  className?: string;
  width?: string;
}

const Alert: React.FC<IAlert> =
  ({ children,
     marginTop,
     marginBottom,
     width,
     className }) => {
  return (
    <StyledAlert
      className={className}
      width={width}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {children}
    </StyledAlert>
  )
}

export default Alert;
