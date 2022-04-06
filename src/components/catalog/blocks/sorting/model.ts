import { createEvent, createStore, sample } from "effector";
import { TSorting } from "../../../types";
import { sortProducts } from "../product-list/model";

export const changeSortingValue = createEvent<string>();
export const changeSortingDirection = createEvent<string>();
export const $sorting = createStore<TSorting>({
  value: "price",
  direction: "from-higher"
}).on(changeSortingValue, (state, newValue) => {
  return {...state, value: newValue}
}) .on(changeSortingDirection, (state, newDirection) => {
  return {...state, direction: newDirection}
});

sample({
  source: $sorting,
  clock: $sorting,
  target: sortProducts
})
