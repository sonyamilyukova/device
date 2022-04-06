import { TProduct } from "../types";
import { createStore } from "effector";
import { loadData } from "../server";

// Загрузка слайдов
export const loadSlides = loadData("slides");

export const $slides = createStore<TProduct[]>([])
  .on(loadSlides.doneData, (_, payload) => payload);
