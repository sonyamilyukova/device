export type TProduct = {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
  isNew?: boolean;
  bluetooth?: boolean;
  colors?: string[];
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
