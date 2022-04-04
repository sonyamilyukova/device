import styled from 'styled-components';
import { ITitleProps } from './title';

export const StyledTitle = styled.h1<ITitleProps>`
  font-family: ${(props) => props.size === 'XS' ? props.theme.fontMain : props.theme.fontAdditional};
  font-weight: ${(props) => props.size === 'XS' ? '700' : '800'};
  font-size: ${(props) => {
    switch (props.size) {
      case 'XS': return props.theme.fontSize.S;
      case 'S': return props.theme.fontSize.XS;
      case 'M': return props.theme.fontSize.L;
      case 'L': return props.theme.fontSize.XL;
    }
  }};
  line-height: ${(props) => {
    switch (props.size) {
      case ('XS' || 'S'): return props.theme.lineHeight.S;
      case 'M': return props.theme.lineHeight.L;
      case 'L': return props.theme.lineHeight.XL;
    }
  }};
  letter-spacing: ${(props) => props.size === 'S' ? props.theme.letterSpacing : 'auto'};
  text-transform: ${(props) => props.size === 'S' ? 'uppercase' : 'none'};
  color: inherit;
  margin-top: ${(props) => props.marginTop ? `${props.marginTop}px` : 'auto'};
  margin-bottom: ${(props) => props.marginBottom ? `${props.marginBottom}px` : 'auto'};
`;
