import React, { useState } from "react";
import { useStore } from "effector-react";
import { $cart, $users, logOut } from "../model";
import LoginForm from "../login-form/login-form";
import { List, Login, CartTitle, StyledCart, Logout, ProductsNumber } from "./styles";

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
        {users.currentUser ? (
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
