import React from "react";
import Slider from "../components/slider/slider";
import Tabs from "../components/services/tabs/tabs";
import { Menu } from "../components/blocks";

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
