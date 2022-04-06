import styled from "styled-components";

interface IContentProps {
  background?: string;
}

export const TabContent = styled.div<IContentProps>`
  margin-right: 60px;
  padding-right: 240px;
  height: 100%;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-position: top 50px right;
  background-size: 170px auto;
  display: grid;
  align-items: center;
`;

export const TextBlock = styled.div`
  align-self: start;

  p {
    color: ${(props) => props.theme.colors.basicDark};
  }
`;