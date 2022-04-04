import styled from 'styled-components';

export interface ISearch {
  width?: string;
};

export const StyledSearch = styled.form<ISearch>`
  display: flex;
  width: ${(props) => props.width ? props.width : 'min-content'};
  position: relative;
  background-image: url(${'/images/search.svg'});
  background-repeat: no-repeat;
  background-position: left 20px center;
`;

export const Button = styled.button`
  font-size: ${(props) => props.theme.fontSize.XS};
  line-height: ${(props) => props.theme.lineHeight.XS};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 160px;
  text-align: center;
  border: none;
  border-radius: 0 20px 20px 0;
  padding-right: 5px;
  background: none;
  cursor: pointer;
  display: none;
  
  &:hover {
    background: ${(props) => props.theme.colors.basicBlack};
    color: ${(props) => props.theme.colors.basicWhite};
  }

  &:active {
    background: ${(props) => props.theme.colors.basicBlack};
    color: rgba(255, 255, 255, 0.3);
    display: block;
  }
`;

export const Input = styled.input`
  font-size: ${(props) => props.theme.fontSize.XS};
  line-height: ${(props) => props.theme.lineHeight.XS};
  flex-grow: 1;
  background: none;
  border: 2px solid transparent;
  border-radius: 20px;
  padding: 8px 180px 8px 52px;
  margin: 0;
  
  &::placeholder {
    color: ${(props) => props.theme.colors.basicBlack};
    opacity: 0.3;
  }
  
  &:hover::placeholder {
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.colors.basicBlack};
    
    &::placeholder {
      opacity: 0.3;
    }
    
    & + ${Button} {
      display: block;
      border-left: 2px solid ${(props) => props.theme.colors.basicBlack};
    }
  }
`;
