import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Raleway';
    font-weight: 800;
    font-style: normal;
    font-display: swap;
    src: local('Raleway'), url('../fonts/raleway-800.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Rubik';
    font-weight: 400;
    font-style: normal;
    font-display: swap;
    src: local('Rubik'), url('../fonts/rubik-400.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Rubik';
    font-weight: 700;
    font-style: normal;
    font-display: swap;
    src: local('Rubik'), url('../fonts/rubik-700.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Rubik';
    font-weight: 800;
    font-style: normal;
    font-display: swap;
    src: local('Rubik'), url('../fonts/rubik-800.woff2') format('woff2');
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    height: 100%;
  }

  body {
    min-width: ${(props) => props.theme.pageWidth};
    background-color: ${(props) => props.theme.colors.basicWhite};
    color: ${(props) => props.theme.colors.basicBlack};
    font-family: ${(props) => props.theme.fontMain};
    font-size: ${(props) => props.theme.fontSize.S};
    line-height: ${(props) => props.theme.lineHeight.M};
    font-weight: normal;
  }

  #root {
    min-height: 100%;
    display: grid;
    grid-template-rows: min-content 1fr min-content;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

`;