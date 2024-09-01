import { Button, ButtonGroup, Tabs, Tab } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { baseStore } from "../../stores/Base/base.store";
import { Pages } from "../../stores/Base/model/types";
import { bgPaths } from "../../stores/Base/model/bgPaths";
import { girlsInPossessionStore } from "../../stores/girlsInPossession/girlsInPossession.store";
import { GirlImgPath } from "../../entities/Girl";
import { Link, useNavigate } from "react-router-dom";
import { ROUTE } from "../../routes";

export const NavigationButtons = observer(() => {
  const navigate = useNavigate();

  const current = baseStore.currentPage;
  const toLesson =() => { 
    const girlImg = `${process.env.PUBLIC_URL}/girls/${girlsInPossessionStore.selectedGirl.id}/${GirlImgPath.normal}`;
    navigate(ROUTE.LESSON.PATH)
    baseStore.setImg(girlImg);
  }
  const toCustomerOrders = () => {
    navigate(ROUTE.WORK.PATH)
    baseStore.setImg(bgPaths.customerOrders);
  }
  const toCInfluence = () => {
    const girlImg = `${process.env.PUBLIC_URL}/girls/${girlsInPossessionStore.selectedGirl.id}/${GirlImgPath.normal}`;
    navigate(ROUTE.INFLUENCE.PATH)    
    baseStore.setImg(girlImg);
  }
  return (
    <>    
    <Button borderRadius={0} h={10} border="1px solid" borderColor={current === Pages.lesson? "#2F4F4F" : "#1C6EA4;"} onClick={toLesson} variant='solid' colorScheme={current === Pages.lesson? "green": "blue"}>{Pages.lesson}</Button>
    <Button borderRadius={0} h={10} border="1px solid" borderColor={current === Pages.сustomerOrders? "#2F4F4F" : "#1C6EA4;"} onClick={toCustomerOrders} variant='solid' colorScheme={current === Pages.сustomerOrders? "green": "blue"}>{Pages.сustomerOrders}</Button>
    <Button borderRadius={0} h={10} border="1px solid" borderColor={current === Pages.influence? "#2F4F4F" : "#1C6EA4;"} onClick={toCInfluence} variant='solid' colorScheme={current === Pages.influence? "green": "blue"}>{Pages.сustomerOrders}</Button>
    </>

  );
});