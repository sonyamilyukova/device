import React from "react";
import { sample } from "effector";
import { useStore } from "effector-react";
import { sortingOptions } from "../../../../const";
import { $sorting, sortProducts, changeSortingValue, changeSortingDirection } from "../../model";
import { Title } from "../../../ui";
import { StyledSorting, Form, Fieldset, SortingButton } from "./styles";

const Sorting: React.FC = () => {
  const sorting  = useStore($sorting);

  sample({
    clock: $sorting,
    source: $sorting,
    target: sortProducts
  })

  return (
    <StyledSorting>
      <Title as="h3" size="S">Сортировка:</Title>
      <Form onSubmit={evt => evt.preventDefault()}>
        <Fieldset>
          <select value={sorting.value} onChange={(evt) => changeSortingValue(evt.target.value)}>
            {sortingOptions.map((option) => (
              <option key={"option-" + option.id} value={option.value}>
                {option.display}
              </option>
            ))}
          </select>
        </Fieldset>
        <Fieldset>
          <SortingButton
            type="radio"
            name="sorting"
            id="from-lower"
            value="from-lower"
            checked={sorting.direction === "from-lower"}
            onChange={evt => changeSortingDirection(evt.target.value)}
          />
          <label className="visually-hidden" htmlFor="from-lower">От меньшего к большему</label>
          <SortingButton
            type="radio"
            name="sorting"
            id="from-higher"
            value="from-higher"
            checked={sorting.direction === "from-higher"}
            onChange={evt => changeSortingDirection(evt.target.value)}
          />
          <label className="visually-hidden" htmlFor="from-higher">От большего к меньшему</label>
        </Fieldset>
      </Form>
    </StyledSorting>
  )
}

export default Sorting;
