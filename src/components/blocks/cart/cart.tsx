import React from 'react';
import { Popup } from '../../layout';
import { useStore } from 'effector-react';
import { $cart } from '../../../model/cart';
import { ProductsList } from './styles';

export interface ICart {
  isOpen?: boolean;
  setOpen?: (params: any) => any;
  className?: string;
}

const Cart: React.FC<ICart> = ({ isOpen, setOpen, className }) => {
  const cart = useStore($cart);

  return (
    <Popup className={className} isOpen={isOpen} setOpen={setOpen}>
      <ProductsList>
        {cart.map((product) => (
          <li key={product.id}>
            {product.title}
          </li>
        ))}
      </ProductsList>
    </Popup>
  )
}

export default Cart;