import React from "react";
import { TTab } from "../../types";
import { TabContent, TextBlock } from "./styles";
import { Title } from "../../ui";

const Tab: React.FC<{ tab?: TTab }> = ({ tab }) => {
  return tab ? (
    <TabContent background={tab.icon ? tab.icon : ''}>
      <TextBlock>
        <Title as='h3' size='L' marginTop={70} marginBottom={30}>{tab.title}</Title>
        <p>{tab.text}</p>
      </TextBlock>
    </TabContent>
  ) : null
};

export default Tab;
