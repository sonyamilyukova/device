import React, { useState } from 'react';
import { CatalogNav } from '../../ui';
import {
  StyledHeader,
  Wrapper,
  StyledLogo,
  StyledSearch,
  StyledNav,
  StyledUserNav,
  CatalogNavHeader,
  Plus
} from './styles';

const Header: React.FC = () => {
  const [menu, setMenu] = useState(false);

  return (
    <StyledHeader>
      <Wrapper>
        <h1 className='visually-hidden'>Интернет-магазин "Девайс"</h1>
        <StyledLogo />
        <StyledSearch width='500px' placeholder='Поиск по сайту'/>
        <StyledNav width='calc(100% + 40px)' asymmetric />
        <StyledUserNav width='calc(100% + 40px)' />
        <CatalogNavHeader onClick={() => setMenu(!menu)}>
          Каталог товаров
          <Plus open={menu} />
        </CatalogNavHeader>
        <CatalogNav display={menu} setDisplay={setMenu} />
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
