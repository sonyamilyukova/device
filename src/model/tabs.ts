import { createStore, createEvent } from 'effector';
import { tabs, ITab } from '../data/tabs';

export const $tabs = createStore<ITab[]>(tabs);

export const changeTab = createEvent<number>();
export const $currentTab = createStore<number>(tabs[0].id)
  .on(changeTab, (currenTab, tabToOpen) => tabToOpen);
