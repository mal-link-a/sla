import { ResponsiveValue, Tab, Tabs } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { baseStore } from "../../stores";
import { Pages } from "../../stores/Base/model/types";
import { NavTab } from "./model/types";

interface Props {
  tabs: NavTab[];
  dir?: string;
}
export const NavigationTabs = ({ tabs, dir }: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [_, setActiveTab] = useState<string>(Pages.influence);
  const setImg = baseStore.setImg;

  //Тип ResponsiveValue<FlexDirection> не импортируется. Кажется, это должно работать не совсем так.
  let direction: ResponsiveValue<any> = dir ?? "row";

  function getDefault() {
    const routes = tabs.map((item: NavTab) => item.pattern);
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname === routes[i]) return i;
    }
    return 0;
  }

  const onClick = (id: string, pattern: string, img: string) => {
    setActiveTab(id);
    setImg(img);
    navigate(pattern);
  };

  return (
    <Tabs display={"flex"} flexDir={direction} defaultIndex={getDefault()}>
      {tabs.map(({ id, pattern, label, img }) => (
        <Tab key={id} onClick={() => onClick(id, pattern, img)}>
          {label}
        </Tab>
      ))}
    </Tabs>
  );
};
