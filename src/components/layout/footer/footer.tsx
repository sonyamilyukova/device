import React from 'react';
import { StyledFooter, StyledLogo, StyledNav, Address, Phone } from './styles';

interface IFooterProps {
}

const Footer: React.FC<IFooterProps> = props => {
  return (
    <StyledFooter>
      <StyledLogo light />
      <StyledNav light />
      <Address>
        <p>
          Санкт-Петербург, набережная
          реки Карповки, 5, литера П.
        </p>
      </Address>
      <Phone>
        <a href='tel:+78128121212'>
          Тел.: +7 (812) 812-12-12
        </a>
      </Phone>
    </StyledFooter>
  )
};

export default Footer;
