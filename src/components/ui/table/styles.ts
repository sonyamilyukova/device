import styled from 'styled-components';

export const StyledTable = styled.dl`
  display: grid;
  grid-template-columns: repeat(auto-fill, 160px);
  position: absolute;
  bottom: 30px;
`;

export const Row = styled.div`
  grid-row: 1 / 2;
`;

export const Key = styled.dd`
  margin: 10px 0 0;
  color: ${(props) => props.theme.colors.basicDark};
  font-size: ${(props) => props.theme.fontSize.XS};
`;

export const Value = styled.dt`
  margin: 0;
  font-size: 36px;
`;
