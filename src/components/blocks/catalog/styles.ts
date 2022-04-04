import styled from 'styled-components';

export const StyledCatalog = styled.section`
  background: linear-gradient(to bottom, ${(props) => props.theme.colors.basicLightGrey} 70px, transparent 0);
  height: 100%;
`;

export const Wrapper = styled.div`
  width: 100%;
  padding-left: 70px;
  padding-right: ${(props) => props.theme.pagePadding};
`;

export const Sorting = styled.div`
  width: fit-content;
  height: 70px;
  display: grid;
  grid-template-columns: min-content 1fr;
  column-gap: ${(props) => props.theme.layoutGap};
  align-items: center;
`;

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

