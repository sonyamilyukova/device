import React from 'react';
import { useStore } from 'effector-react';
import { $categories } from '../../../model/products';
import { StyledMenu, List, StyledLink, Icon } from './styles';

const Menu: React.FC = () => {
  const categories = useStore($categories);

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
