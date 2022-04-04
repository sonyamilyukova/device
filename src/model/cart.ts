import { createStore, createEvent } from "effector";
import { IDevice } from '../data/devices';

export const buyProduct = createEvent<IDevice>();

export const $cart = createStore<IDevice[]>([])
  .on(buyProduct, (state, product) =>
    state.find((el) => el.id === product.id) ? state : [...state, product]
  );
