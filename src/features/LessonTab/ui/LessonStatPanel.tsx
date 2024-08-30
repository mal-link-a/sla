import { FC } from "react";
import { statPanelProp } from "../model/types";
import { VStack } from "@chakra-ui/react";
import { LessonStatParam } from "./LessonStatParam";
import { observer } from "mobx-react-lite";


interface Props {
  stats: statPanelProp;
}

//TODO В пропсах число получаем от 0 до 10. Написать на ts проверку на диапазон
export const LessonStatPanel: FC<Props> = observer(({ stats, }) => {
  return (
    <>
      <VStack gap={2} border='1px solid #5211ff;'>
      {stats.stats.map((item)=> 
        <LessonStatParam key={item.name} blockName={stats.blockName} stat={item}/>
      )}    
      </VStack>
    </>
  );
});