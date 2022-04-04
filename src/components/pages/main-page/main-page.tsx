import React from 'react';
import { Slider, Tabs, Menu } from '../../blocks';
import { Wrapper } from './styles';

const MainPage: React.FC = () => {
  return (
    <main>
      <Wrapper>
        <Slider />
        <Menu />
        <Tabs />
      </Wrapper>
    </main>
  )
};

export default MainPage;
