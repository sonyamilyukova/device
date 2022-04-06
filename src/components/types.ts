export type TProduct = {
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
  }[];
}

export type TSorting = {
  value: string;
  direction: string;
}

export type TFilters = {
  minPrice: number;
  maxPrice: number;
  colors: string[];
  bluetooth: "yes" | "no";
}

export type TTab = {
  id: number;
  title: string;
  text: string;
  icon: string;
}
