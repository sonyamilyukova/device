import React from "react";
import ProductCard from "./product-card/product-card";
import { useParams } from "react-router-dom";
import { useStore } from "effector-react";
import { Products, ListItem, Text } from "./styles";
import { $products, loadProducts } from "../../model";

const ProductList: React.FC = () => {
  const products = useStore($products);
  const { category } = useParams();

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
