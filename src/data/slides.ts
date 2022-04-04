import  { IDevice } from './devices';

export const slides: IDevice[] = [
  {
    id: 1,
    category: 'quadcopter',
    image: '/images/slider/quadcopter.png',
    title: 'Квадрокоптер с лазером',
    moto: 'Порхает как бабочка, жалит как пчела!',
    description: 'Этот обычный, на первый взгляд, квадрокоптер оснащён мощным лазером, замаскированным под стандартную камеру.',
    price: 10000,
    qualities: [
      {
        quality: 'Дальность полета',
        value: '800 м'
      },
      {
        quality: 'Радиус поражения',
        value: '50 м'
      }
    ]
  },
  {
    id: 2,
    category: 'bracelet',
    image: '/images/slider/bracelet.png',
    title: 'Фитнес-браслет',
    moto: 'Худеем правильно!',
    description: 'Мотивирующие фитнес-браслеты помогут найти в себе силы не пропускать занятия и соблюдать диету.',
    price: 2000,
    qualities: [
      {
        quality: 'Без подзарядки',
        value: '48 часов'
      }
    ]
  },
  {
    id: 3,
    category: 'monopod',
    image: '/images/slider/monopod.png',
    title: 'Восьмиметровая селфи-палка',
    moto: 'Делай селфи, как Бен Стиллер!',
    description: 'Самая длинная палка для селфи доступна в нашем магазине. Восемь (Восемь, Карл!) метров длиной и весом всего 5 кг.',
    price: 6400,
    qualities: [
      {
        quality: 'Длина палки',
        value: '8,5 м'
      },
      {
        quality: 'Вес палки',
        value: '5 кг'
      },
      {
        quality: 'Материал',
        value: 'Карбон'
      }
    ]
  },
];
