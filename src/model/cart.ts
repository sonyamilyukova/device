import { createStore, createEvent } from "effector";

export const buyProduct = createEvent<any>();

export const $cart = createStore<any[]>([])
  .on(buyProduct, (state, product) =>
    state.find((el) => el.id === product.id) ? state : [...state, product]
  );
