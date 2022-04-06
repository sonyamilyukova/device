import { TProduct, TSorting, TFilters } from "../../../types";
import { createStore, createEvent, sample } from "effector";
import { filterList } from "../../../../const";
import { loadData } from "../../../server";

// Загрузка товаров
export const loadProducts = loadData("products");
export const $loadedProducts = createStore<TProduct[]>([]);

// Манипуляции со списком товаров
export const changeProductsCategory = createEvent<string>();
export const updateProducts = createEvent<TProduct[]>();
export const filterProducts = createEvent<TFilters>();
export const sortProducts = createEvent<TSorting>();

// @ts-ignore
export const $products = createStore<TProduct[]>([])
  .on(loadProducts.doneData, (_, payload) => payload)
  .on(updateProducts, (_, payload) => payload)
  .on(changeProductsCategory, (products, category) =>
    products.filter((product) => product.category === category)
  )
  .on(filterProducts, (products, filters) => {
    return products.filter((product) => {

      // Фильтрация по стоимости
      if (product.price < filters.minPrice) return false;
      if (product.price > filters.maxPrice) return false;

      // Фильтрация  по наличию Bluetooth
      if (product.bluetooth && filters.bluetooth === "no") return false;
      if (!product.bluetooth && filters.bluetooth === "yes") return false;

      // Фильтрация по цветам
      let colorCheck;
      if (!filters.colors.length && !product.colors?.length) colorCheck = true;
      else if (filters.colors.length && !product.colors?.length) colorCheck = false;
      else if (!filters.colors.length && product.colors &&  product.colors.length) colorCheck = false;
      else {
        const colors = filterList.find((filter) => filter.name === "color")!.options;
        colors!.forEach((color) => {
          if (filters.colors.includes(color.value) &&
            product.colors && product.colors.includes(color.value)) colorCheck = true;
        })
      }
      return colorCheck;
    })
  })
  .on(sortProducts, (products, sorting) => {
    switch (sorting.value) {

      // Сортировка по стоимости
      case "price":
        switch (sorting.direction) {
          case "from-lower":
            return [...products].sort((a, b) => a.price - b.price);
          case "from-higher":
            return [...products].sort((a, b) => b.price - a.price);
        } break

      // Сортировка по новизне
      case "novelty":
        switch (sorting.direction) {
          case "from-lower":
            return [...products].sort((a, b) => a.isNew ? 0 : b.isNew ? -1 : 1);
          case "from-higher":
            return [...products].sort((a, b) => a.isNew ? 0 : b.isNew ? 1 : -1);
        } break
      default: return products;
    }
  });

sample({
  source: $products,
  clock: changeProductsCategory,
  target: $loadedProducts
});
