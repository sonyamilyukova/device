import styled from 'styled-components';
import { Cart } from '../../blocks';

interface IListProps {
  width?: string;
}

interface IButtonProps {
  onClick?: any;
  withoutHover?: boolean;
}

export const List = styled.ul<IListProps>`
  list-style: none;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => props.width ? props.width : 'auto'};
  position: relative;
`;

export const Button = styled.button<IButtonProps>`
  display: inline-block;
  background: none;
  border-radius: 20px;
  border: 2px solid transparent;
  outline: none;
  font-size: ${(props) => props.theme.fontSize.XS};
  line-height: ${(props) => props.theme.lineHeight.XS};
  padding: 10px 20px 10px 45px;
  margin: 0;
  position: relative;
  cursor: ${(props) => props.withoutHover ? 'unset' : 'pointer'};
  
  &:hover {
    opacity: ${(props) => props.withoutHover ? '1' : '0.6'};
  }

  &:active {
    opacity: ${(props) => props.withoutHover ? '1' : '0.3'};
  }
`;

export const Login = styled(Button)`
  &:before {
    content: '';
    width: 13px;
    height: 12px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20px;
    margin: auto;
    background-image: url('/images/person.svg');
    background-repeat: no-repeat;
  }
`;

export const Logout = styled(Button)`
  opacity: 0.3;
  padding-left: 18px;
  
  &:hover {
    opacity: 0.6;
  }
`;

export const StyledCart = styled(Cart)`
  display: none;
  
  &:hover {
    display: block;
  }
`;

export const CartTitle = styled(Button)`
  &:before {
    content: '';
    width: 16px;
    height: 14px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 20px;
    margin: auto;
    background-image: url('/images/cart.svg');
    background-repeat: no-repeat;
  }
  
  &:hover + ${StyledCart} {
    display: block;
  }
`;

export const ProductsNumber = styled.span`
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.basicWhite};
  min-width: 21px;
  height: 21px;
  position: absolute;
  left: 5px;
  text-align: center;
  font-size: 14px;
  line-height: 19px;
  padding: 0 3px;
`;
