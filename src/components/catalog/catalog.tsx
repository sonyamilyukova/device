import React, { useEffect } from "react";
import { sample }  from "effector";
import Filters from "./blocks/filters/filters";
import Sorting from "./blocks/sorting/sorting";
import ProductList from "./blocks/product-list/product-list";
import { InnerHeader, Title, Breadcrumbs } from "../ui";
import { categories } from "../../const";
import { useParams } from "react-router-dom";
import { $products, loadProducts, changeProductsCategory, $loadedProducts } from "./model";
import { Layout, Column, Wrapper } from "./styles";

const Catalog: React.FC = () => {
  const { category } = useParams();
  const title = categories.find((el) => el.name === category)?.display;

  useEffect(() =>
    // @ts-ignore
    loadProducts().then(() => changeProductsCategory(category)),
    [category]
  );

  sample({
    clock: changeProductsCategory,
    source: $products,
    target: $loadedProducts
  });

  return (
    <section>
      <InnerHeader>
        <Title as="h2" size="L">{title}</Title>
        <Breadcrumbs
          marginTop={15}
          items={title ?
            ["Главная", "Каталог товаров", title] :
            ["Главная", "Каталог товаров"]}
        />
      </InnerHeader>
      <Layout>
        <Column>
          <Wrapper>
            <Filters />
          </Wrapper>
        </Column>
        <Column>
          <Wrapper>
            <Sorting />
            <ProductList />
          </Wrapper>
        </Column>
      </Layout>
    </section>
  )
};

export default Catalog;
