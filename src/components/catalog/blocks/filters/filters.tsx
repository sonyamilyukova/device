import React, { useState } from "react";
import { useStore } from "effector-react";
import { $loadedProducts, $defaultFilters, filterProducts, updateProducts } from "../../model";
import { filterList } from "../../../../const";
import { Title, Range, Control, Button } from "../../../ui";
import { Header, Form, Fieldset, List } from "./styles";

const Filters: React.FC = () => {
  const loadedProducts = useStore($loadedProducts);
  const defaultFilters = useStore($defaultFilters);

  const [minPrice, setMinPrice] = useState(defaultFilters.minPrice);
  const [maxPrice, setMaxPrice] = useState(defaultFilters.maxPrice);
  const [colors, setColors] = useState(defaultFilters.colors);
  const [bluetooth, setBluetooth] = useState(defaultFilters.bluetooth);

  return (
    <div>
      <Header>
        <Title as="h3" size="S">Фильтр:</Title>
      </Header>
      <Form onSubmit={(evt) => {
        evt.preventDefault();
        updateProducts(loadedProducts);
        filterProducts({
          minPrice: minPrice,
          maxPrice: maxPrice,
          colors: colors,
          bluetooth: bluetooth
        });
      }}>
        {filterList.map((filter) => (
          <Fieldset>
            <Title as="legend" size="XS">{filter.display}</Title>
            <List>
              {filter.options!.map((option) => (
                <li key={filter.name + '-' + option.id}>
                  {filter.type === "range" ? (
                    <Range
                      label={option.display}
                      min={filter.min!}
                      max={filter.max!}
                      name={option.value}
                      value={option.value === "min" ? minPrice : maxPrice}
                      onChange={evt => option.value === "min" ?
                        setMinPrice(Number(evt.target.value)) :
                        setMaxPrice(Number(evt.target.value))
                      }
                    />
                  ) : filter.type === "checkbox" ? (
                    <Control
                      type="checkbox"
                      label={option.display}
                      name={filter.name}
                      value={option.value}
                      checked={colors.includes(option.value)}
                      onChange={evt => colors.includes(evt.target.value) ?
                        setColors(colors.filter((color) => color !== evt.target.value)) :
                        setColors([...colors, evt.target.value])
                      }
                    />
                  ) : filter.type === "radio" ? (
                    <Control
                      type="radio"
                      label={option.display}
                      name={filter.name}
                      value={option.value}
                      checked={bluetooth === option.value}
                      onChange={evt => setBluetooth(evt.target.value)}
                    />
                  ) : null}
                </li>
              ))}
            </List>
          </Fieldset>))}
        <Button type="submit" width="200px" highlighted>Показать</Button>
      </Form>
    </div>
  )
};

export default Filters;
