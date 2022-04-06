import React from 'react';
import { categories } from "../../../const";
import { StyledMenu, List, StyledLink, Icon } from './styles';

const Menu: React.FC = () => {
  return (
    <StyledMenu>
      <List>
        {categories.map((category) => (
          <li key={category.name}>
            <StyledLink to={'/catalog/' + category.name}>
              <Icon
                icon={category.icon}
                position={category.name === 'monopod' ? 'bottom' : 'center'}
              />
              {category.display}
            </StyledLink>
          </li>
        ))}
      </List>
    </StyledMenu>
  )
}

export default Menu;
