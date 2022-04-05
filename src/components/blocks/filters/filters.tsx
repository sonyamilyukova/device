import React, { useState } from 'react';
import { Title, Range } from '../../ui';
import {
  StyledFilters,
  Wrapper,
  Header
} from './styles';

const Filters: React.FC = () => {
  return (
    <StyledFilters>
      <Wrapper>
        <Header>
          <Title as='h3' size='S'>Фильтр:</Title>
        </Header>
      </Wrapper>
    </StyledFilters>
  )
};

export default Filters;
