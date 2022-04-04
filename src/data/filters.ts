export interface IDefaultFilters {
  price: {
    min: number;
    max: number;
  };
  colors: string[];
  bluetooth: string;
}

export interface IFilter {
  id: number,
  name: string,
  type: string,
  display: string,
  options?:
    {
      id: number;
      value: string;
      display: string;
    }[]
}

export const defaultFilters: IDefaultFilters = {
  price: {
    min: 0,
    max: 5000,
  },
  colors: ['black', 'white'],
  bluetooth: 'yes',
};

export const filters: IFilter[] = [
  {
    id: 1,
    name: 'price',
    type: 'range',
    display: 'Стоимость',
  },
  {
    id: 2,
    name: 'color',
    type: 'checkbox',
    display: 'Цвет',
    options: [
      {
        id: 1,
        value: 'black',
        display: 'Черный',
      },
      {
        id: 2,
        value: 'white',
        display: 'Белый',
      },
      {
        id: 3,
        value: 'blue',
        display: 'Синий',
      },
      {
        id: 4,
        value: 'red',
        display: 'Красный',
      },
      {
        id: 5,
        value: 'pink',
        display: 'Розовый',
      },
    ]
  },
  {
    id: 3,
    name: 'bluetooth',
    type: 'radio',
    display: 'Bluetooth',
    options: [
      {
        id: 1,
        value: 'yes',
        display: 'Есть',
      },
      {
        id: 2,
        value: 'no',
        display: 'Нет',
      }
    ]
  }
];
