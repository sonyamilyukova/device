import React from 'react';
import { useParams } from 'react-router-dom';
import { Filters, Catalog } from '../../blocks';
import { Title } from '../../ui';
import { Header, Wrapper } from './styles';
import { useStore } from 'effector-react';
import { $categories } from '../../../model/products';

const CatalogPage: React.FC = () => {
  const categories = useStore($categories);
  const { category } = useParams();

  return (
    <main>
      <Header>
        <Title as='h2' size='L'>
          {categories.find((el) => el.name === category)?.display}
        </Title>
      </Header>
      <Wrapper>
        <Filters />
        <Catalog />
      </Wrapper>
    </main>
  )
};

export default CatalogPage;
