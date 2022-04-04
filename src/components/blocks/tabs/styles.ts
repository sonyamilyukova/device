import styled from 'styled-components';

interface IButtonProps {
  isActive: boolean;
};

interface IContentProps {
  background?: string;
};

export const StyledTabs = styled.section`
  background: linear-gradient(to bottom, white 100px, ${(props) => props.theme.colors.basicLight} 0);
  padding: ${(props) => props.theme.pagePadding};
  padding-top: 0;
  padding-bottom: 70px;
  display: grid;
  grid-template-columns: ${(props) => props.theme.layoutColumnWide} 1fr;
  align-items: center;
  column-gap: 120px;
`;

export const Wrapper = styled.div`
  border-right: 7px solid ${(props) => props.theme.colors.basicBlack};
  height: 100%;
  min-height: 300px;
  display: grid;
  align-items: center;
`;

export const Nav = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  row-gap: 20px;
`;

export const Button = styled.button<IButtonProps>`
  width: 100%;
  display: block;
  padding: 10px 20px;
  background-color: ${(props) => props.isActive ? props.theme.colors.basicBlack : 'transparent'};
  color: ${(props) => props.isActive ? props.theme.colors.themeMain : props.theme.colors.basicBlack};
  text-align: left;
  border: none;
  font-family: ${(props) => props.theme.fontAdditional};
  font-weight: 800;
  letter-spacing: ${(props) => props.theme.letterSpacing};
  text-transform: uppercase;
  cursor: ${(props) => props.isActive ? 'unset' : 'pointer'};
`;

export const Content = styled.div<IContentProps>`
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

