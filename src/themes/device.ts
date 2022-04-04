import { DefaultTheme } from 'styled-components';

export const deviceTheme: DefaultTheme = {
  fontMain: '"Rubik", sans-serif',
  fontAdditional: '"Raleway", sans-serif',
  fontSize: {
    XS: '16px',
    S: '18px',
    M: '24px',
    L: '40px',
    XL: '50px'
  },
  lineHeight: {
    XS: '19px',
    S: '24px',
    M: '30px',
    L: '40px',
    XL: '50px'
  },
  letterSpacing: '0.2em',
  pageWidth: '1440px',
  pagePadding: '140px',
  layoutColumn: '160px',
  layoutColumnWide: '280px',
  layoutGap: '40px',
  colors: {
    basicWhite: '#ffffff',
    basicLight: '#f0f0f0',
    basicLightGrey: '#ebebeb',
    basicGrey: '#dcdcdc',
    basicDark: '#444444',
    basicBlack: '#000000',
    themeMain: '#ffe17f',
    themeDark: '#ffc700',
    themeAdditional: '#af4fff',
    statusError: '#ff3d3d',
    statusWarning: '#fd912e',
    statusSuccess: '#08af00',
  }
};
