import React, { useState } from 'react';
import { useStore } from 'effector-react';
import { $filters, changeFilters } from '../../../model/products';
import { filters } from '../../../data/filters';
import { Title, Range } from '../../ui';
import {
  StyledFilters,
  Wrapper,
  Header,
  Form,
  Fieldset,
  List,
  ListItem,
  Control,
  Label
} from './styles';

const Filters: React.FC = () => {
  const currentFilters = useStore($filters);
  const [formData, setFormData] = useState(currentFilters);

  const handleFilterChange = (filterName: string, optionValue: string) => {
    switch (filterName) {
      case 'color':
        return formData.colors.includes(optionValue) ?
          setFormData({
            ...formData, colors: formData.colors.filter(color => color !== optionValue)
          }) : setFormData({
            ...formData, colors: [...formData.colors, optionValue]
          })
      case 'bluetooth':
        return setFormData({
          ...formData, bluetooth: optionValue
        })
    }}

  return (
    <StyledFilters>
      <Wrapper>
        <Header>
          <Title as='h3' size='S'>Фильтр:</Title>
        </Header>
        <Form onSubmit={(evt) => {
          evt.preventDefault();
          changeFilters(formData);
        }}>
          {filters.map((filter) => (
            <Fieldset>
              <Title as='legend' size='XS'>{filter.display}</Title>
              {filter.type === 'range' ?
                (<Range
                    name={filter.name}
                    min={0}
                    max={5000}
                    onMinChange={() => {}}
                    onMaxChange={() => {}}
                  />) :
                (<List>
                  {filter.options!.map((option) => (
                    <ListItem key={filter.name + '-' + option.id}>
                      <Control
                        type={filter.type}
                        name={filter.name}
                        value={option.value}
                        checked={filter.name === 'color' ? formData.colors.includes(option.value) :
                          filter.name === 'bluetooth' ? (formData.bluetooth === option.value) : false}
                        onChange={() => handleFilterChange(filter.name, option.value)}
                      />
                      <Label>{option.display}</Label>
                    </ListItem>
                  ))}
                </List>)}
            </Fieldset>))}
          <button type='submit'>Показать</button>
        </Form>
      </Wrapper>
    </StyledFilters>
  )
};

export default Filters;
