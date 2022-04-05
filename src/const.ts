export const categories:
  {
    name: string;
    display: string;
    icon: string;
  }[] = [
  {
    name: 'vr',
    display: 'Виртуальная реальность',
    icon: '/images/menu/menu-vr.svg'
  },
  {
    name: 'monopod',
    display: 'Моноподы для cелфи',
    icon: '/images/menu/menu-monopod.svg'
  },
  {
    name: 'camera',
    display: 'Экшн-камеры',
    icon: '/images/menu/menu-camera.svg'
  },
  {
    name: 'bracelet',
    display: 'Фитнес-браслеты',
    icon: '/images/menu/menu-bracelet.svg'
  },
  {
    name: 'watch',
    display: 'Умные часы',
    icon: '/images/menu/menu-watch.svg'
  },
  {
    name: 'quadcopter',
    display: 'Квадрокоптеры',
    icon: '/images/menu/menu-quadcopter.svg'
  }
]

export const sortingOptions:
  {
    id: number;
    value: string;
    display: string;
  }[] = [
  {
    id: 1,
    value: "price",
    display: "По стоимости"
  },
  {
    id: 2,
    value: "novelty",
    display: "По новизне"
  }
]

export const filterList:
  {
    id: number;
    name: string;
    type: string;
    display: string;
    options?:
      {
        id: number;
        value: string;
        display: string;
      }[];
    min?: number;
    max?: number;
  }[] = [
  {
    id: 1,
    name: "price",
    type: "range",
    display: "Стоимость",
    options: [
      {
        id: 1,
        value: "min",
        display: "От",
      },
      {
        id: 2,
        value: "max",
        display: "До",
      }
    ],
    min: 0,
    max: 10000,
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