import styled from 'styled-components';
import { IAlert } from './alert';

export const StyledAlert = styled.div<IAlert>`
  padding: 10px 20px;
  background-color: #ffaeae;
  color: ${(props) => props.theme.colors.basicWhite};
  margin-top: ${(props) => props.marginTop ? `${props.marginTop}px` : '0'};
  margin-bottom: ${(props) => props.marginBottom ? `${props.marginBottom}px` : '0'};
  width: ${(props) => props.width ? props.width : 'auto'};
`;