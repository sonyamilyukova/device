import React from 'react';
import { StyledTable, Row, Key, Value } from './styles';

export interface ITable {
  rows: {
    quality: string;
    value: string;
  }[];
}

const Table: React.FC<ITable> = ({ rows }) => {
  return (
    <StyledTable>
      {rows.map((row, index)  => (
        <Row key={index}>
          <Value>{row.value}</Value>
          <Key>{row.quality}</Key>
        </Row>
      ))}
    </StyledTable>
  )
}

export default Table;
