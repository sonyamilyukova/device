import React from 'react';
import { StyledTitle } from './styles';

export interface ITitleProps {
  size: 'XS' | 'S' | 'M' | 'L';
  as: any;
  marginTop?: number;
  marginBottom?: number;
  className?: string;
};

const Title: React.FC<React.PropsWithChildren<ITitleProps>> =
  ({ children,
     size,
     as,
     marginTop,
     marginBottom,
     className }) => {
  return (
    <StyledTitle size={size} as={as} marginTop={marginTop} marginBottom={marginBottom} className={className}>
      {children}
    </StyledTitle>
  )
};

export default Title;
