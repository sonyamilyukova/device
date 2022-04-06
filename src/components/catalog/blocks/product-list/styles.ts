import styled from "styled-components";

export const Products = styled.ol`
  list-style: none;
  padding: 0;
  margin: 70px 0 90px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 360px);
  gap: ${(props) => props.theme.layoutGap};
  max-width: 820px;
`;

export const Text = styled.p`
  margin: 60px 0;
  color: ${(props) => props.theme.colors.basicDark};
  font-size: 19px;
`;

export const ButtonWrapper = styled.div`
  grid-column: 1 / -1;
`;
