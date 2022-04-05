import db from "../../db.json";
import {TProduct, TSorting, TFilters } from "./types";
import { createStore, createEvent, createEffect } from "effector";
import { filterList } from "../../const";

// Сортировка
export const changeSortingValue = createEvent<string>();
export const changeSortingDirection = createEvent<string>();
export const $sorting = createStore<TSorting>({
  value: "price",
  direction: "from-higher"
}).on(changeSortingValue, (state, newValue) => {
  return {...state, value: newValue}
}) .on(changeSortingDirection, (state, newDirection) => {
  return {...state, direction: newDirection}
})

// Начальные фильтры
export const $defaultFilters = createStore<TFilters>({
  minPrice: 0,
  maxPrice: 5000,
  colors: ["black", "white"],
  bluetooth: "yes"
});

// Загрузка товаров (как будто) с сервера
export const loadProducts = createEffect<{args: any}, TProduct[]>(() =>
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(db.products),
    headers: {'Content-type': 'application/json; charset=UTF-8'}
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    return response.json()
  }).then(data => {
    const result = Object.values(data).slice(0, -1);
    return result as TProduct[];
  }).catch(() => [])
);

export const $loadedProducts = createStore<TProduct[]>([]);

// Манипуляции со списком товаров
export const changeProductsCategory = createEvent<string>();
export const updateProducts = createEvent<TProduct[]>();
export const filterProducts = createEvent<TFilters>();
export const sortProducts = createEvent<TSorting>();

// Список товаров
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
            // console.log('price lower')
            return [...products].sort((a, b) => a.price - b.price);
          case "from-higher":
            // console.log('price higher')
            return [...products].sort((a, b) => b.price - a.price);
        } break

      // Сортировка по новизне
      case "novelty":
        switch (sorting.direction) {
          case "from-lower":
            // console.log('novelty lower')
            return [...products].sort((a, b) => a.isNew ? 0 : b.isNew ? -1 : 1);
          case "from-higher":
            // console.log('novelty higher')
            return [...products].sort((a, b) => a.isNew ? 0 : b.isNew ? 1 : -1);
        } break
      default: return products;
    }
  });
