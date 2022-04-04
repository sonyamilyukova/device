import styled from 'styled-components';

export const StyledFilters = styled.section`
  background: linear-gradient(to bottom, 
      ${(props) => props.theme.colors.basicGrey} 70px, 
      ${(props) => props.theme.colors.basicLightGrey} 0
  );
  height: 100%;
`;

export const Wrapper = styled.div`
  padding: 0 70px 0 200px;
  margin-left: auto;
`;

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

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Control = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 17px;
  cursor: pointer;
`;

export const Label = styled.label`
  cursor: pointer;
`;
