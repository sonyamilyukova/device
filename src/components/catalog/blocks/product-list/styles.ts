import styled from "styled-components";

export const Products = styled.ol`
  list-style: none;
  padding: 0;
  margin: 70px 0 77px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: ${(props) => props.theme.layoutGap};
  max-width: 820px;
`;

export const Text = styled.p`
  margin: 60px 0;
  color: ${(props) => props.theme.colors.basicDark};
  font-size: 19px;
`;

export const ListItem = styled.li`
  width: 360px;
`;
