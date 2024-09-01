import {
  Button,
  HStack,
  Progress,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { expBase, statLevelColor } from "../../../entities/Girl";
import { lessonTabStore } from "../model/lessonTab.store";
import { lessonExecution } from "../lib/lessonExecution";
import { observer } from "mobx-react-lite";
import { girlSpendingStamina } from "../../../generalEvents/girlSpendingStamina";
import { getStudyText } from "../lib/getStudyText";
import {
  StudiedSexStats,
  studiedSexStats,
  StudiedStatWithСondition,
} from "../../../entities/StudiedStats";
import { checkConditions } from "../../../generalEvents/checkConditions";

interface Props {
  keyName: string;
  name: string;
  description: string;
  level: number;
  exp: number;
}

//TODO В пропсах level получаем от 0 до 5. Написать на ts проверку на диапазон?
export const LessonStatParam: FC<Props> = observer(
  ({ keyName, level, exp, name, description }) => {
    const infoMode = lessonTabStore.infoMode;
    const toast = useToast();
    const showFailedToast = (text: string) => {
      toast({
        title: "Не выполнено",
        description: text,
        duration: 10000,
        position: "top-left",
        isClosable: true,
      });
    };

    const onClick = () => {
      toast.closeAll();
      console.log(infoMode);
      if (infoMode) {
        toast({
          title: name,
          description: description,
          duration: 9000,
          position: "top-left",
          isClosable: true,
          status: "info",
        });
        return;
      }
      const energyCheck = girlSpendingStamina(1);
      if (!energyCheck) {
        const needConditionCheck = studiedSexStats[
          keyName as keyof StudiedSexStats
        ] as StudiedStatWithСondition;
        if (needConditionCheck.conditions?.length > 0) {
          let conditionCheck = checkConditions(needConditionCheck.conditions);
          if (conditionCheck) {
            showFailedToast(conditionCheck);
            return;
          }
        }
        lessonTabStore.setModalIsOpen(true, keyName);
        let isLvlUp = lessonExecution(keyName, level, exp);
        lessonTabStore.setModalIsOpen(
          true,
          keyName,
          getStudyText(keyName, level, isLvlUp)
        );
      } else {
        showFailedToast(energyCheck);
        return;
      }
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
            color={statLevelColor[level]}
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
            <Text color={statLevelColor[level]}>{level}</Text>
          </HStack>
        </label>
      </VStack>
    );
  }
);
