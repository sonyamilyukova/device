import styled from 'styled-components';

interface IWrapperProps {
  width?: string;
  marginTop?: number;
  marginBottom?: number;
}

export const Wrapper = styled.div<IWrapperProps>`
  width: ${(props) => props.width ? props.width : 'auto'};
  margin-top: ${(props) => props.marginTop ? `${props.marginTop}px` : '0'};
  margin-bottom: ${(props) => props.marginBottom ? `${props.marginBottom}px` : '0'};
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: ${(props) => props.theme.fontSize.S};
  line-height: ${(props) => props.theme.lineHeight.XS};
  font-weight: 700;
  margin-bottom: 16px;
`;

export const StyledInput = styled.input`
  border: 3px solid ${(props) => props.theme.colors.basicLightGrey};
  background-color: ${(props) => props.theme.colors.basicLightGrey};
  padding: 20px;
  font-size: ${(props) => props.theme.fontSize.XS};
`;