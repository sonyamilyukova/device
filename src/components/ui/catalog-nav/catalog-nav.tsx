import React from 'react';
import { StyledNav, List, StyledLink } from './styles';
import { $categories } from '../../../model/products';
import { useStore } from 'effector-react';

export interface ICatalogNav {
  display: boolean;
  setDisplay: (params: boolean) => any;
}

const CatalogNav: React.FC<ICatalogNav> = ({ display, setDisplay }) => {
  const categories = useStore($categories);

  return (
    <StyledNav display={display}>
      <List>
        {categories.map((category) => (
          <li key={category.name}>
            <StyledLink
              to={'/catalog/' + category.name}
              onClick={() => setDisplay(false)}>
              {category.display}
            </StyledLink>
          </li>
        ))}
      </List>
    </StyledNav>
  )
}

export default CatalogNav;
