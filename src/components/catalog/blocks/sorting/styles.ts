import styled from "styled-components";

export const StyledSorting = styled.div`
  height: 70px;
  display: flex;
  gap: ${(props) => props.theme.layoutGap};
  align-items: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Fieldset = styled.fieldset`
  border: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const Select = styled.select`
  display: block;
  box-sizing: border-box;
  background: url(${"/images/arrows/dropdown.svg"}) no-repeat top 50% right 15px;
  border: none;
  font-family: ${(props) => props.theme.fontMain};
  font-size: ${(props) => props.theme.fontSize.XS};
  line-height: ${(props) => props.theme.lineHeight.XS};
  padding: 5px 40px 5px 15px;
  margin: 0;
  -webkit-appearance: none;
  cursor: pointer;
  
  &:hover {
    opacity: 0.6;
  }
  
  &:active {
    opacity: 0.3;
  }
`;

interface ITriangleProps {
  isSelected: boolean;
}

export const TriangleTop = styled.div<ITriangleProps>`
  width: 30px;
  height: 30px;
  background-image: url(${"/images/arrows/triangle.svg"});
  background-repeat: no-repeat;
  background-position: center;
  display: inline-block;
  position: relative;
  opacity: ${(props) => props.isSelected ? "1" : "0.2"};
  
  &:hover {
    opacity: ${(props) => props.isSelected ? "1" : "0.5"};
  }
`;

export const TriangleBottom = styled(TriangleTop)`
  transform: rotate(180deg);
`;

export const SortingButton = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  cursor: pointer;
  opacity: 0;
`;
