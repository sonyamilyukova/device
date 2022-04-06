import { createStore } from "effector";
import { TFilters } from "../../../types";

export const $defaultFilters = createStore<TFilters>({
  minPrice: 0,
  maxPrice: 5000,
  colors: ["black", "white"],
  bluetooth: "yes"
})
