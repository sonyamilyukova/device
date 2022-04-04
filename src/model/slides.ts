import { createStore } from 'effector';
import { slides } from '../data/slides';
import { IDevice } from '../data/devices';

export const $slides = createStore<IDevice[]>(slides);
