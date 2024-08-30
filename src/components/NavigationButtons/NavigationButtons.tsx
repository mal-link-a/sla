import { Button } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { baseStore } from "../../stores/Base/base.store";
import { Pages } from "../../stores/Base/model/types";
import { bgPaths } from "../../stores/Base/model/bgPaths";
import { girlsInPossessionStore } from "../../stores/girlsInPossession/girlsInPossession.store";
import { GirlImgPath } from "../../entities/Girl";

export const NavigationButtons = observer(() => {
  const toLesson =() => {   
    const girlImg = `${process.env.PUBLIC_URL}/girls/${girlsInPossessionStore.selectedGirl.id}/${GirlImgPath.normal}`;
    baseStore.setPage(Pages.lesson);  
    baseStore.setImg(girlImg);
  }
  const toCustomerOrders = () => {
    baseStore.setPage(Pages.сustomerOrders);
    baseStore.setImg(bgPaths.customerOrders);
  }
  return (
    <>
    <Button h={10} onClick={toLesson} variant='solid' colorScheme={baseStore.currentPage === Pages.lesson? "green": "blue"}>{Pages.lesson}</Button>
    <Button h={10} onClick={toCustomerOrders} variant='solid' colorScheme={baseStore.currentPage === Pages.сustomerOrders? "green": "blue"}>{Pages.сustomerOrders}</Button>
    </>
  );
});
