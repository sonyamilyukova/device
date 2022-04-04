import styled from 'styled-components';
import { Logo, Search, Nav, UserNav } from '../../ui';

interface IPlusButtonProps {
  open?: boolean;
}

export const StyledHeader = styled.header`
  padding: ${(props) => props.theme.pagePadding};
  padding-top: 0;
  padding-bottom: 0;
`;

export const Wrapper = styled.div`
  background: linear-gradient(to bottom, transparent 40px, ${(props) => props.theme.colors.themeMain} 0);
  padding: 17px 60px 38px;
  display: grid;
  grid-template-areas: 
          'logo .'
          'search user-nav' 
          'catalog-menu nav';
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content;
  column-gap: ${(props) => props.theme.layoutGap};
  row-gap: 20px;
  position: relative;
`;

export const StyledLogo = styled(Logo)`
  grid-area: logo;
`;

export const StyledSearch = styled(Search)`
  grid-area: search;
  margin-left: -20px;
`;

export const StyledUserNav = styled(UserNav)`
  grid-area: user-nav;
  margin-left: -20px;
`;

export const StyledNav = styled(Nav)`
  grid-area: nav;
  margin-left: -20px;
`;

export const Plus = styled.span<IPlusButtonProps>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.basicBlack};
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  margin-top: -3px;
  opacity: 0.2;
  
  &:before,
  &:after {
    content: '';
    display: block;
    width: 16px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.basicBlack};
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:after {
    transform: ${(props) => props.open ? 'none' : 'rotate(90deg)'};
  }
`;

export const CatalogNavHeader = styled.button`
  grid-area: catalog-menu;
  background: none;
  font-family: ${(props) => props.theme.fontAdditional};
  font-size: ${(props) => props.theme.fontSize.S};
  line-height: ${(props) => props.theme.lineHeight.S};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  font-weight: 800;
  text-decoration: none;
  text-transform: uppercase;
  color: inherit;
  display: block;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 70px;
  border: 2px solid transparent;
  border-radius: 20px;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
  align-self: end;
  position: relative;

  &:hover ${Plus} {
    opacity: 1;
  }

  &:active {
    opacity: 0.3;
  }
`;
