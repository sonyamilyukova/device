import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import { INavProps } from './nav';

export const StyledNav = styled.nav<INavProps>`
  color: ${(props) => props.light ? props.theme.colors.basicWhite : props.theme.colors.basicBlack};
  width: ${(props) => props.width ? props.width : 'auto'};
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  font-family: ${(props) => props.theme.fontAdditional};
  font-size: ${(props) => props.theme.fontSize.S};
  line-height: ${(props) => props.theme.lineHeight.S};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  font-weight: 800;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
  display: block;
  padding: 10px 20px;
  border: 2px solid transparent;
  border-radius: 20px;
  cursor: pointer;
  position: relative;
  
  &:after {
    content: '';
    height: 2px;
    position: absolute;
    left: 20px;
    right: 24px;
    bottom: 4px;
    display: none;
  }
  
  &:hover:after {
    display: block;
  }

  &:active {
    opacity: 0.3;
  }
`;

export const ListItem = styled.li<INavProps>`
  &:nth-child(3n + 3) {
    margin-left: ${(props) => props.asymmetric ? 'auto' : '0'};
  }
  
  ${StyledLink}:after {
    background-color: ${(props) => props.light ? props.theme.colors.basicWhite : props.theme.colors.basicBlack};
  }

  ${StyledLink}:hover {
    color: ${(props) => props.light ? props.theme.colors.themeDark : props.theme.colors.basicBlack};
    
    :after {
      background-color: ${(props) => props.light ? props.theme.colors.themeDark : props.theme.colors.basicBlack};
    }
  }
`;
