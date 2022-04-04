import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from 'effector-react';
import {
  $products,
  $filters,
  filterByCategory,
  filterProducts,
  resetProducts,
  sortProducts,
  $sorting, loadProducts
} from '../../../model/products';
import { ProductCard } from '../../ui';
import { Products, ListItem, Text } from './styles';

const ProductsList: React.FC = () => {
  const products = useStore($products);
  const sorting = useStore($sorting);
  const filters = useStore($filters);
  const { category } = useParams();


  // useEffect(() => {
  //   resetProducts();
  //   sortProducts(sorting);
  //   filterProducts(filters);
  //   if (category) filterByCategory(category);
  // });

  return (
    <div>
      <h3 className='visually-hidden'>Список товаров</h3>
      {products?.length ? (
        <Products>
          {products.map((product) => (
            <ListItem key={product.id}>
              <ProductCard product={product} />
            </ListItem>
          ))}
        </Products>
      ) : <Text>К сожалению, таких товаров пока нет</Text>}
    </div>
  )
};

export default ProductsList;
