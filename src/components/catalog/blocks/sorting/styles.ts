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
`;

export const SortingButton = styled.input`
  width: 11px;
  height: 10px;
  background-color: ${(props) => props.theme.colors.basicBlack};
`;
