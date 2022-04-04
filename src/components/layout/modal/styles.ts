import styled from 'styled-components';

interface IPopupProps {
  isOpen: boolean;
}

interface IButtonProps {
  onClick?: any;
}

export const Wrapper = styled.div<IPopupProps>`
  display: ${(props) => props.isOpen ? 'block' : 'none'};
  position: fixed;
  z-index: 10;
`;

export const Overlay = styled.div`
  background-color: rgba(240, 240, 240, 0.9);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const StyledModal = styled.div`
  background-color: ${(props) => props.theme.colors.basicWhite};
  padding: 80px;
  border: 10px solid ${(props) => props.theme.colors.basicBlack};
  box-shadow: 0 10px 0 0 rgba(0, 0, 0, 0.1);
  width: 920px;
  height: min-content;
  min-height: 450px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

export const CloseButton = styled.button<IButtonProps>`
  width: 100px;
  height: 100px;
  border: none;
  background: none;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 58px;
  right: 43px;
  cursor: pointer;
  
  &:before,
  &:after {
    content: '';
    display: block;
    background-color: ${(props) => props.theme.colors.basicBlack};
    height: 4px;
    width: 32px;
    position: absolute;
    transform: rotate(45deg);
    transition: transform 0.2s ease-in-out;
  }

  &:after {
    transform: rotate(-45deg);
  }
  
  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.3;
  }

  &:hover:before,
  &:active:before {
    transform: rotate(135deg);
  }

  &:hover:after,
  &:active:after {
    transform: rotate(45deg);
  }
`;