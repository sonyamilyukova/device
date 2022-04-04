import React from 'react';
import { IDevice } from '../../../data/devices';
import Title from '../title/title';
import { StyledCard, Image, Price, StyledButton, New } from './styles';
import { buyProduct } from '../../../model/cart';

const ProductCard: React.FC<{ product: IDevice }> = ({ product }) => {
  return (
    <StyledCard>
      <Image src={product.image} width={360} height={380} alt={product.title} />
      <Title as='h4' size='XS'>{product.title}</Title>
      <New display={product.isNew}>
        <span className='visually-hidden'>Новый товар</span>
      </New>
      <Price>{product.price} ₽</Price>
      <StyledButton highlighted light onClick={() => buyProduct(product)}>
        Купить
      </StyledButton>
    </StyledCard>
  )
};

export default ProductCard;