import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface IIconProps {
  icon: string;
  position: 'top' | 'center' | 'bottom';
}

export const StyledMenu = styled.section`
  padding: 0 ${(props) => props.theme.pagePadding};
`;

export const List = styled.ul`
  padding: 0;
  margin: 0 auto;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${(props) => props.theme.layoutGap};
  max-width: 1400px;
`;

export const Icon = styled.div<IIconProps>`
  width: 160px;
  height: 160px;
  margin-bottom: 33px;
  background-color: ${(props) => props.theme.colors.themeMain};
  position: relative;
  transition: background-color 0.1s ease;
  
  &:after {
    content: '';
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: absolute;
    background-image: url(${(props) => props.icon});
    background-repeat: no-repeat;
    background-position: ${(props) => props.position ? props.position : 'center'};
  }
`;

export const StyledLink = styled(Link)`
  font-family: ${(props) => props.theme.fontAdditional};
  color: ${(props) => props.theme.colors.basicBlack};
  line-height: 24px;
  text-decoration: none;
  display: block;
  width: 160px;
  letter-spacing: -0.02em;
  
  &:hover ${Icon} {
    background-color: ${(props) => props.theme.colors.themeDark};
  }

  &:active {
    color: rgba(0, 0, 0, 0.3);
    
    & ${Icon}:after {
      opacity: 0.3;
    }
  }
`;
