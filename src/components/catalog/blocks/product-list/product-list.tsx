import React from "react";
import ProductCard from "./product-card/product-card";
import { useStore } from "effector-react";
import { $products } from "../../model";
import { Products, ListItem, Text } from "./styles";

const ProductList: React.FC = () => {
  const products = useStore($products);
  return (
    <div>
      <h3 className="visually-hidden">Список товаров</h3>
      {products?.length ? (
        <Products>
          {products.map((product) => (
            <ListItem key={"product-" + product.id}>
              <ProductCard product={product} />
            </ListItem>
          ))}
        </Products>
      ) : <Text>К сожалению, таких товаров пока нет</Text>}
    </div>
  )
};

export default ProductList;
