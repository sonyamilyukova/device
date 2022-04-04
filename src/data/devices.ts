export interface IDevice {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
  moto?: string;
  description?: string;
  isNew?: boolean;
  bluetooth?: boolean;
  colors?: string[];
  qualities?: {
    quality: string;
    value: string;
  }[]
}

export const devices: IDevice[] = [
  {
    id: 4,
    category: 'monopod',
    image: '/images/catalog/device-1.jpg',
    title: 'Любительская селфи-палка',
    price: 500,
    isNew: false,
    bluetooth: false,
    colors: [
      'black',
      'white'
    ]
  },
  {
    id: 5,
    category: 'monopod',
    image: '/images/catalog/device-2.jpg',
    title: 'Профессиональная селфи-палка ',
    price: 1500,
    isNew: false,
    bluetooth: false,
    colors: [
      'black',
      'blue'
    ]
  },
  {
    id: 6,
    category: 'monopod',
    image: '/images/catalog/device-3.jpg',
    title: 'Непотопляемая селфи-палка',
    price: 2500,
    isNew: false,
    bluetooth: true,
    colors: [
      'black'
    ]
  },
  {
    id: 7,
    category: 'monopod',
    image: '/images/catalog/device-4.jpg',
    title: 'Селфи-палка «Следуй за мной»',
    price: 4900,
    isNew: true,
    bluetooth: true,
    colors: [
      'white',
      'pink'
    ]
  },
  {
    id: 8,
    category: 'bracelet',
    image: 'https://cdn1.ozone.ru/s3/multimedia-q/6059058530.jpg',
    title: 'Фитнес-браслет',
    price: 4000,
    isNew: true,
    bluetooth: true,
    colors: [
      'black'
    ]
  },
  {
    id: 9,
    category: 'bracelet',
    image: 'https://cdn1.ozone.ru/s3/multimedia-l/6000037425.jpg',
    title: 'Фитнес-браслет',
    price: 3000,
    isNew: false,
    bluetooth: true,
    colors: [
      'black',
      'red'
    ]
  },
  {
    id: 10,
    category: 'vr',
    image: 'https://cdn1.ozone.ru/s3/multimedia-x/6245054265.jpg',
    title: 'Очки виртуальной реальности',
    price: 30000,
    isNew: false,
    bluetooth: true,
    colors: [
      'black'
    ]
  },
  {
    id: 11,
    category: 'vr',
    image: 'https://cdn1.ozone.ru/s3/multimedia-8/6121006160.jpg',
    title: 'Очки виртуальной реальности',
    price: 10000,
    isNew: false,
    bluetooth: true,
    colors: [
      'white'
    ]
  },
  {
    id: 12,
    category: 'quadcopter',
    image: 'https://cdn1.ozone.ru/multimedia/1022874844.jpg',
    title: 'Квадрокоптер',
    price: 10000,
    isNew: false,
    bluetooth: true,
    colors: [
      'white',
      'red'
    ]
  },
  {
    id: 13,
    category: 'watch',
    image: 'https://cdn1.ozone.ru/s3/multimedia-4/6056031016.jpg',
    title: 'Умные часы',
    price: 5000,
    isNew: true,
    bluetooth: false,
    colors: [
      'white',
      'black'
    ]
  },
  {
    id: 14,
    category: 'watch',
    image: 'https://cdn1.ozone.ru/s3/multimedia-k/6029092448.jpg',
    title: 'Умные часы для детей',
    price: 2000,
    isNew: true,
    bluetooth: false,
    colors: [
      'black',
      'white',
      'pink'
    ]
  },
  {
    id: 15,
    category: 'watch',
    image: 'https://cdn1.ozone.ru/s3/multimedia-h/6242423909.jpg',
    title: 'Умные часы для детей',
    price: 2000,
    isNew: false,
    bluetooth: true,
    colors: [
      'black',
      'red',
      'blue'
    ]
  }
];
