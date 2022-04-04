import styled from 'styled-components';
import { IPopup } from './popup';

export const StyledPopup = styled.div<IPopup>`
  background-color: ${(props) => props.theme.colors.basicBlack};
  color: ${(props) => props.theme.colors.basicWhite};
  padding: 20px;
  box-shadow: 0 10px 0 0 #0000001A;
  transform: translate(60px, 14px);
  font-size: ${(props) => props.theme.fontSize.XS};
  line-height: ${(props) => props.theme.lineHeight.XS};
  width: 320px;
  position: absolute;
  top: 36px;
  right: 0;
  z-index: 3;
  
  &:before {
    content: '';
    position: absolute;
    background-color: transparent;
    background-image: url('images/arrows/thin-triangle.svg');
    background-repeat: no-repeat;
    background-position: bottom center;
    transform: translate(-3px,-70px);
    height: 50px;
    width: 280px;
    cursor: pointer;
  }
`;
