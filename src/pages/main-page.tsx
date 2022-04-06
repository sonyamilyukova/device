import React from "react";
import Slider from "../components/slider/slider";
import Tabs from "../components/tabs/tabs";
import Menu from "../components/categories/menu/menu";

const MainPage: React.FC = () => {
  return (
    <main>
      <Slider />
      <Menu />
      <Tabs />
    </main>
  )
};

export default MainPage;
