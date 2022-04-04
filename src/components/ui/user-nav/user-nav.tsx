import React, { useState } from 'react';
import { LoginForm } from '../../blocks';
import { List, Login, CartTitle, StyledCart, Logout, ProductsNumber } from './styles';
import { $users, logOut } from "../../../model/users";
import { $cart } from '../../../model/cart';
import { useStore } from "effector-react";

export interface IUserNavProps {
  width?: string;
  className?: string;
}

const UserNav: React.FC<IUserNavProps> = ({ width, className }) => {
  const [modal, setModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const users = useStore($users);
  const cart = useStore($cart);

  return (
    <List className={className} width={width}>
      <li key='1'>
        {users.isLogged ? (
          <>
            <Login as='p' withoutHover>
              {users.currentUser.name}
            </Login>
            <Logout onClick={() => {
              logOut();
              setModal(false);
            }}>
              Выйти
            </Logout>
          </>
        ) : (
          <>
            <Login onClick={() => {
              setAlert(false);
              setModal(true);
            }}>
              Войти
            </Login>
            <LoginForm
              isOpen={modal}
              setOpen={setModal}
              alert={alert}
              setAlert={setAlert}
            />
          </>
        )}
      </li>
      <li key='2'>
        <CartTitle>
          {cart.length ? <ProductsNumber>{cart.length}</ProductsNumber> : null}
          Корзина
        </CartTitle>
        <StyledCart />
      </li>
    </List>
  )
};

export default UserNav;
