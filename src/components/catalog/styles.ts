import styled from "styled-components";

export const Layout = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 6fr 13fr;
`;

export const Wrapper = styled.div`
    width: 100%;
`;

export const Column = styled.div`
  &:first-child {
    background: linear-gradient(to bottom,
    ${(props) => props.theme.colors.basicGrey} 70px, ${(props) => props.theme.colors.basicLightGrey} 0);

    & ${Wrapper} {
      padding: 0 70px 0 ${(props) => props.theme.pagePadding};
      margin-left: auto;
    }
  }

  &:last-child {
    background: linear-gradient(to bottom,
    ${(props) => props.theme.colors.basicLightGrey} 70px, transparent 0);

    & ${Wrapper} {
      padding: 0 ${(props) => props.theme.pagePadding} 0 70px;
    }
  }
`;
