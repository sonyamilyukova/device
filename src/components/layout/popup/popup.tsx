import React from 'react';
import { StyledPopup } from './styles';

export interface IPopup {
  children: React.ReactNode;
  isOpen?: boolean;
  setOpen?: (params: any) => any;
  className?: string;
}

const Popup: React.FC<IPopup> =
  ({ children,
     isOpen,
     setOpen,
     className }) => {
  return (
    <StyledPopup isOpen={isOpen} setOpen={setOpen} className={className}>
      {children}
    </StyledPopup>
  )
}

export default Popup;