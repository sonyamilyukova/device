import React from 'react';
import { StyledLogo } from './styles';

export interface ILogoProps {
  light?: boolean;
  className?: string;
}

const Logo: React.FC<ILogoProps> = ({ light, className }) => {
  return (
    <StyledLogo to='/' className={className}>
      <img
        src={light ? '/images/logo-light.svg' : '/images/logo.svg'}
        alt='Логотип интернет-магазина "Девайс"'
        width={145}
        height={36}
      />
    </StyledLogo>
  )
};

export default Logo;
