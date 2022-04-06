import styled from 'styled-components';

export const Header = styled.div`
  height: 70px;
  display: grid;
  align-items: center;
`;

export const Form = styled.form`
  margin: 94px 0 140px;
`;

export const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0 0 70px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -45px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: ${(props) => props.theme.colors.basicBlack};
  }
`;

export const List = styled.ul`
  padding: 0;
  margin: 25px 0 0;
  list-style: none;
  display: grid;
  gap: 20px;
  font-size: ${(props) => props.theme.fontSize.XS};
  line-height: ${(props) => props.theme.lineHeight.XS};
`;

