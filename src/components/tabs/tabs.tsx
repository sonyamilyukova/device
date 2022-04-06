import React from 'react';
import { useStore } from 'effector-react';
import { $services, $currentTab, changeTab }  from "./model";
import { StyledTabs, Wrapper, Nav, Button } from "./styles";
import Tab from "./tab/tab";

const Tabs: React.FC = () => {
  const tabs = useStore($services);
  const currentTab = useStore($currentTab);

  return (
    <StyledTabs id="tabs">
      <h2 className="visually-hidden">Сервисы</h2>
      <Wrapper>
        <Nav>
          {tabs.map((tab) => (
            <li key={tab.id}>
              <Button
                type="button"
                onClick={() => changeTab(tab.id)}
                isActive={tab.id === currentTab}
              >
                {tab.title}
              </Button>
            </li>
          ))}
        </Nav>
      </Wrapper>
      <Tab tab={tabs.find((tab) => tab.id === currentTab)}/>
    </StyledTabs>
  )
};

export default Tabs;
