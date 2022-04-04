import React from 'react';
import { useStore } from 'effector-react';
import { $tabs, changeTab } from '../../../model/tabs';
import { StyledNav, List, ListItem, StyledLink } from './styles';

export interface INavProps {
  light?: boolean;
  asymmetric?: boolean;
  width?: string;
  className?: string;
}

const Nav: React.FC<INavProps> =
  ({ light,
     asymmetric,
     width,
     className}) => {
  const tabs = useStore($tabs);
  return (
    <StyledNav
      light={light}
      width={width}
      className={className}>
      <List>
        {tabs.map((tab) => (
          <ListItem key={tab.id} asymmetric={asymmetric} light={light}>
            <StyledLink smooth to='/#tabs' onClick={() => changeTab(tab.id)}>
              {tab.title}
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </StyledNav>
  )
};

export default Nav;