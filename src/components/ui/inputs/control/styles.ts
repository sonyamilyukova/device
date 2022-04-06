import styled from  "styled-components";

export const StyledControl = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 17px;
  cursor: pointer;
  height: 20px;
`;

export const Label = styled.label`
  cursor: pointer;
  
  &:before {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    left: 0;
    border: 2px solid ${(props) =>  props.theme.colors.basicBlack};
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 20px;
  height: 20px;
  margin: 0;

  & + ${Label}:after {
    display: ${(props) => props.type === "radio" && props.checked ? "block" : "none"};
    content: "";
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: ${(props) => props.theme.colors.basicBlack};
    border-radius: 50%;
    left: 6px;
    top: 1px;
    bottom: 0;
    margin: auto;
  }
  
  & + ${Label}:before {
    opacity: ${(props) => props.checked ? "1" : "0.2"};
    background-image: ${(props) => props.type === "checkbox" && props.checked ? 
            "url('/images/check-mark.svg')" : "none"};
    background-repeat: no-repeat;
    background-position: center;
    border-radius: ${(props) => props.type === "checkbox" ? "3px" : "50%"};
  }

  &:hover + ${Label} {
    opacity: ${(props) => props.checked ? "0.5" : "1"};
  }

  &:active + ${Label} {
    opacity: 0.2;
  }
`;
