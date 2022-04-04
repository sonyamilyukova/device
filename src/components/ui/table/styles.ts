import styled from 'styled-components';

export const StyledTable = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  row-gap: 10px;
  position: absolute;
  bottom: 30px;
`;

export const Key = styled.dd`
  margin: 0;
  grid-row: 2 / 3;
  color: ${(props) => props.theme.colors.basicDark};
  font-size: ${(props) => props.theme.fontSize.XS};
`;

export const Value = styled.dt`
  margin: 0;
  grid-row: 1 / 2;
  font-size: 36px;
`;
