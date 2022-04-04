import React from 'react';
import { StyledTable, Key, Value } from './styles';

export interface ITable {
  rows: {
    quality: string;
    value: string;
  }[];
}

const Table: React.FC<ITable> = ({ rows }) => {
  return (
    <StyledTable>
      {rows.map((row)  => (
        <>
          <Value>{row.value}</Value>
          <Key>{row.quality}</Key>
        </>
      ))}
    </StyledTable>
  )
}

export default Table;
