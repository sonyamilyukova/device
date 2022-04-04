import React, { useState } from 'react';
import { Wrapper, Overlay, StyledModal, CloseButton } from './styles';

export interface IPopup {
  isOpen: boolean;
  setOpen: any;
  children: React.ReactNode;
}

const Modal: React.FC<IPopup> =
  ({ isOpen,
     setOpen,
     children }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <Overlay onClick={() => setOpen(false)} />
      <StyledModal>
        <CloseButton onClick={() => setOpen(false)}/>
        {children}
      </StyledModal>
    </Wrapper>
  )
}

export default Modal;
