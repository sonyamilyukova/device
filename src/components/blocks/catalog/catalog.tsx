import React from 'react';
import { StyledCatalog, Wrapper, Sorting } from './styles';
import ProductsList from './products-list';
import { changeSorting } from '../../../model/products';
import { Title } from '../../ui';

const Catalog: React.FC = () => {
  return (
    <StyledCatalog>
      <Wrapper>
        <Sorting>
          <Title as='h3' size='S'>Сортировка:</Title>
          <select onChange={(evt) => changeSorting(evt.target.value)}>
            <option value='by-lower-price' selected>Сначала дешевые</option>
            <option value='by-higher-price'>Сначала дорогие</option>
            <option value='by-novelty'>Сначала новые</option>
          </select>
        </Sorting>
        <ProductsList />
      </Wrapper>
    </StyledCatalog>
  )
};

export default Catalog;