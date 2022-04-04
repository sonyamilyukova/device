import React, { useState } from 'react';
import { StyledSearch, Input, Button } from './styles';

export interface ISearchProps {
  width?: string;
  placeholder: string;
  className?: string;
};

const Search: React.FC<ISearchProps> = ({ width, placeholder, className }) => {
  const [value, setValue] = useState('');

  return (
    <StyledSearch
      action='/'
      method='get'
      width={width}
      className={className}
      onSubmit={() => setValue('')}
    >
      <label className='visually-hidden'>{placeholder}</label>
      <Input
        type='search'
        name='page-search'
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <Button type='submit'>Найти</Button>
    </StyledSearch>
  )
};

export default Search;
