import React, { useEffect } from "react";
import Slider from "../components/slider/slider";
import Tabs from "../components/services/tabs/tabs";
import { Menu } from "../components/blocks";
import styled from "styled-components";
import { loadSlides } from "../components/slider/model";

const MainPage: React.FC = () => {
  // @ts-ignore
  useEffect(() => loadSlides());

  return (
    <main>
      <Slider />
      <Menu />
      <Tabs />
    </main>
  )
};

export default MainPage;
