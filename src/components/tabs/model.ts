import { createStore, createEvent } from "effector";
import { services } from "../../const";
import { TTab } from "../types";

export const $services = createStore<TTab[]>(services);

export const changeTab = createEvent<number>();
export const $currentTab = createStore<number>(services[0].id)
  .on(changeTab, (currentTab, newTab) => newTab);
