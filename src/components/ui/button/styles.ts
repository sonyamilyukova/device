import styled from 'styled-components';
import { IButton } from "./button";

export const StyledButton = styled.button<IButton>`
  display: inline-block;
  width: ${(props) => props.width ? props.width : 'auto'};
  font-family: ${(props) => props.theme.fontAdditional};
  font-weight: 800;
  font-size: ${(props) => props.theme.fontSize.S};
  line-height: 21px;
  text-align: center;
  color: ${(props) => props.highlighted ? 'inherit' : props.theme.colors.basicBlack};
  background: none;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  letter-spacing: ${(props) => props.theme.letterSpacing};
  margin-top: ${(props) => props.marginTop ? `${props.marginTop}px` : '0'};
  margin-right: ${(props) => props.marginRight ? `${props.marginRight}px` : '0'};
  margin-bottom: ${(props) => props.marginBottom ? `${props.marginBottom}px` : '0'};
  margin-left: ${(props) => props.marginLeft ? `${props.marginLeft}px` : '0'};
  position: relative;
  z-index: 0;
  padding: 0 ${(props) => props.highlighted ? props.light ? '35px' : '15px' : ''};
  
  &:before {
    display: ${(props) => props.highlighted ? 'block' : 'none'};
    content: '';
    position: absolute;
    background-color: ${(props) => props.light ? props.theme.colors.themeMain : props.theme.colors.themeDark};
    height: 8px;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    z-index: -1;
    transition: height 0.2s ease-in-out;
  }

  &:hover {
    opacity: ${(props) => props.highlighted ? '1' : '0.6'};
    
    &:before {
      height: 50px;
      top: 0;
      bottom: 0;
      margin: auto;
    }
  }

  &:active {
    color: rgba(0, 0, 0, 0.3);
    
    &:before {
      background-color: ${(props) => props.light ? props.theme.colors.themeMain : props.theme.colors.themeDark};
    }
  }
`;