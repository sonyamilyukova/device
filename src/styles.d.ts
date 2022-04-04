import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontMain: string,
    fontAdditional: string,
    fontSize: {
      XS: string,
      S: string,
      M: string,
      L: string,
      XL: string
    },
    lineHeight: {
      XS: string,
      S: string,
      M: string,
      L: string,
      XL: string
    },
    letterSpacing: string,
    pageWidth: string,
    pagePadding: string,
    layoutColumn: string,
    layoutColumnWide: string,
    layoutGap: string,
    colors: {
      basicWhite: string,
      basicLight: string,
      basicLightGrey: string,
      basicGrey: string,
      basicDark: string,
      basicBlack: string,
      themeMain: string,
      themeDark: string,
      themeAdditional: string,
      statusError: string,
      statusWarning: string,
      statusSuccess: string,
    }
  }
}
