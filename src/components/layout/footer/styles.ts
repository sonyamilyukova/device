import  styled from 'styled-components';
import { Logo, Nav } from '../../ui';

export const StyledFooter = styled.footer`
  background-color: ${(props) => props.theme.colors.basicDark};
  color: ${(props) => props.theme.colors.basicWhite};
  font-size: ${(props) => props.theme.fontSize.XS};
  line-height: ${(props) => props.theme.lineHeight.XS};
  padding: ${(props) => props.theme.pagePadding};
  padding-top: 62px;
  padding-bottom: 64px;
  display: grid;
  grid-template-areas:
          'logo . .'
          'address nav phone'
          '. socials copyright';
  grid-template-rows: min-content;
  grid-template-columns: 
          ${(props) => props.theme.layoutColumnWide} 1fr ${(props) => props.theme.layoutColumnWide};
  gap: ${(props) => props.theme.layoutGap};
  align-items: center;
`;

export const StyledLogo = styled(Logo)`
  grid-area: logo;
`;

export const StyledNav = styled(Nav)`
  grid-area: nav;
  justify-self: center;
`;

export const Address = styled.address`
  grid-area: address;
  font-style: normal;
  
  p {
    margin: 0;
  }
`;

export const Phone = styled.address`
  grid-area: phone;
  justify-self: right;
  font-style: normal;
  
  a {
    text-decoration: none;
    color: inherit;
    padding: 10px;
    padding-right: 0;
  }
`;
