import {
  Button,
  HStack,
  Progress,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { expBase } from "../../../entities/Girl";
import { lessonTabStore } from "../model/lessonTab.store";
import { lessonExecution } from "../lib/lessonExecution";
import { observer } from "mobx-react-lite";
import { girlSpendingStamina } from "../../../generalEvents/girlSpendingStamina";
import { statParamProp } from "../model/types";
import { getStudyText } from "../lib/getStudyText";
import { StudiedSexStats, studiedSexStats, StudiedStatWithСondition,  } from "../../../entities/StudiedStats";
import { checkConditions } from "../../../generalEvents/checkConditions";

interface Props {
  blockName: string;
  stat: statParamProp;
}

//TODO В пропсах level получаем от 0 до 5. Написать на ts проверку на диапазон?
export const LessonStatParam: FC<Props> = observer(  
  ({ blockName, stat }) => {
    const [key, level, exp, name, description,  infoMode] = [
      stat.key,
      stat.level,
      stat.exp,
      stat.name,
      stat.description,
      lessonTabStore.infoMode
    ];
    const toast = useToast();
     const showFailedToast =(text:string) => {
      toast({
        title: "Не выполнено",
        description: text,
        duration: 10000,
        position: "top-left",
        isClosable: true,
      });
     }

    const onClick = () => {
      toast.closeAll();
      if (infoMode) {
        toast({
          title: name,
          description: description,
          duration: 9000,
          position: "top-left",
          isClosable: true,
          status:'info'
        });
        return;
      }
      const energyCheck = girlSpendingStamina(1); 
      if (!energyCheck) {
        if (blockName === "sexExp"){
          const needConditionCheck = studiedSexStats[key as keyof StudiedSexStats] as StudiedStatWithСondition;
          if (needConditionCheck.conditions?.length > 0) {
            let conditionCheck = checkConditions(needConditionCheck.conditions);
            if (conditionCheck) {
              showFailedToast(conditionCheck);
              return;
            }            
          }            
        } 
        lessonTabStore.setModalIsOpen(true, key,);
        let isLvlUp = lessonExecution(blockName, key, level,exp);   
        lessonTabStore.setModalIsOpen(true, key, getStudyText(key,level ,isLvlUp));     
      } else {
        showFailedToast(energyCheck);
        return;
      }      
    };

    const getColor = () => {
      if (level < 1) return "#000000";
      if (level < 2) return "#A0522D";
      if (level < 3) return "#DC143C";
      if (level < 4) return "#FF1493";
      if (level < 5) return "#FF00FF";
      if (level < 6) return "#8A2BE2";
      if (level < 7) return "#0000CD";
      if (level < 8) return "#1E90FF";
      if (level < 9) return "#00CED1";
      if (level < 10) return "#9ACD32";
      return "#008000";
    };
    return (
      <VStack alignItems={"flex-start"} gap={0}>
        <label>
          <Button
            justifyContent={"flex-start"}
            onClick={() => {
              onClick();
            }}
            variant="link"
            h={6}
            minW={"100%"}
            fontWeight={500}
            color={getColor()}
          >
            {name}
          </Button>
          <HStack w={200} justifyContent={"space-between"} align={"baseline"}>
            <Progress
              w={150}
              colorScheme={level === 5 ? "green" : "blue"}
              value={
                level === 5
                  ? 100
                  : level * 20 + Math.ceil((exp * 10) / expBase[level])
              }
            />
            <Text color={getColor()}>{level}</Text>
          </HStack>
        </label>
      </VStack>
    );
  }
);
