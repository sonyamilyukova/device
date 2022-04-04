export interface ICategory {
  name: string;
  display: string;
  icon: string;
}

export const categories: ICategory[] = [
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
];
