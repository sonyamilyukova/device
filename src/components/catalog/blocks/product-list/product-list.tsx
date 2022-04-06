import React, { useState, useEffect } from "react";
import ProductCard from "./product-card/product-card";
import { useStore } from "effector-react";
import { $products } from "./model";
import { Products, Text, ButtonWrapper } from "./styles";
import { Button } from "../../../ui";
import { useParams } from "react-router-dom";

const ProductList: React.FC = () => {
  const productsStore = useStore($products);
  const [isSliced, setSliced] = useState(true);
  const [length, setLength] = useState(4);
  const products = isSliced ? productsStore.slice(0, length) : productsStore;

  const { category } = useParams();
  useEffect(() => {
    setSliced(true);
    setLength(4);
  }, [category])

  return (
    <div>
      <h3 className="visually-hidden">Список товаров</h3>
      {products?.length ? (
        <Products>
          {products.map((product) => (
            <li key={"product-" + product.id}>
              <ProductCard product={product} />
            </li>
          ))}
          {isSliced && productsStore.length >= 4 ? (
            <ButtonWrapper>
              <Button width="100%" height="55px" marginTop={44} border
                      onClick={() => (length + 4) < productsStore.length ?
                        setLength(length + 4) :
                        setSliced(false)}>
                Загрузить ещё
              </Button>
            </ButtonWrapper>
          ) : null}
        </Products>
      ) : <Text>К сожалению, таких товаров пока нет</Text>}
    </div>
  )
};

export default ProductList;
