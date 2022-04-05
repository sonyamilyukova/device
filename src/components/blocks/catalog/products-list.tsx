import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';


const ProductsList: React.FC = () => {
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

    </div>
  )
};

export default ProductsList;
