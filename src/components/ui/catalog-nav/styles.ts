import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface INav {
  display?: boolean;
}

export const StyledNav = styled.div<INav>`
  display: ${(props) => props.display ? 'block' : 'none'};
  background-color: ${(props) => props.theme.colors.themeMain};
  position: absolute;
  left: 0;
  right: 0;
  top: 90%;
  padding: 30px 60px 55px;
  z-index: 5;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0 0 0 -13px;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-template-rows: repeat(3, min-content);
  column-gap: 16px;
  row-gap: 10px;

  li:last-child {
    grid-column: 1 / 2;
  }
`;

export const StyledLink = styled(Link)`
  font-size: ${(props) => props.theme.fontSize.XS};
  line-height: ${(props) => props.theme.lineHeight.XS};
  color: inherit;
  text-decoration: none;
  display: block;
  padding: 3px 13px;
  border: 2px solid transparent;
  border-radius: 20px;
  
  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.3;
  }
`;
