import {
  Box,
  Button,
  Grid,
  GridItem,
  HStack,

  Text,
  VStack,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

import { girlsInPossessionStore } from "../../../stores/girlsInPossession/girlsInPossession.store";
import { lessonTabStore } from "../model/lessonTab.store";
import { protagonistStore } from "../../../stores/protagonist/protagonist.store";

import { lessonGetDataForStatPanel, } from "../lib/lessonGetDataForStatPanel";
import { LessonStatPanel } from "./LessonStatPanel";
import { GirlOrdinaryInfo } from "../../../components/GirlOrdinaryInfo/GirlOrdinaryInfo";
import { ActionModal } from "../../../components/ActionModal/ActionModal";
import { LessonTeacher } from "../model/types";
import { GirlImg, GirlImgPath } from "../../../entities/Girl";


//TODO В пропсах число получаем от 0 до 10. Написать на ts проверку на диапазон
export const LessonTab = observer(() => {
  const [
    infomode,
    switchInfoMod,
    teacher,
    setTeacher,
    current,
    energy,
    money,
    modalIsOpen,
    setModalIsOpen,
    modalImg,
    modalText,
  ] = [
    lessonTabStore.infoMode,
    lessonTabStore.switchInfoMod,
    lessonTabStore.teacher,
    lessonTabStore.setTeacher,
    girlsInPossessionStore.selectedGirl,
    protagonistStore.energy,
    protagonistStore.money,
    lessonTabStore.modalIsOpen,
    lessonTabStore.setModalIsOpen,
    lessonTabStore.modalImg,
    lessonTabStore.modalText
  ];
  const girlImg = `${process.env.PUBLIC_URL}/girls/${girlsInPossessionStore.selectedGirl.id}/${GirlImgPath[modalImg as keyof GirlImg]}`;

  const energyIndicator = () => {
    let components = [];
    let energyIsExist = energy >= 0;

    for (
      let i = energyIsExist ? 0 : energy;
      energyIsExist ? i < energy : i < 0;
      i++
    ) {
      components.push(
        <Box
          key={"stamina" + i}
          borderRadius={"50%"}
          w={4}
          h={4}
          bg={energyIsExist ? "green" : "red"}
        />
      );
    }
    return components;
  };
  return (
    <Grid
      minH={"100%"}
      templateRows="40px 1fr"
      templateColumns="150px 1fr 1fr"
      gap={0}
    >
      <GridItem
        display={"flex"}
        justifyContent={"space-between"}
        rowSpan={1}
        colSpan={4}
        bg="white"
      >
        <Button
          onClick={(e) => {
            setTeacher(LessonTeacher.Me);
          }}
          isDisabled={infomode}
          colorScheme={teacher === LessonTeacher.Me ? "green" : "blue"}
          w="24%"
        >
          {LessonTeacher.Me}
        </Button>
        <Button
          onClick={() => {
            setTeacher(LessonTeacher.Assistant);
          }}
          isDisabled={infomode}
          colorScheme={teacher === LessonTeacher.Assistant ? "green" : "blue"}
          w="24%"
        >
          {LessonTeacher.Assistant}
        </Button>
        <Button
          onClick={() => {
            setTeacher(LessonTeacher.Coach);
          }}
          isDisabled={infomode}
          colorScheme={teacher === LessonTeacher.Coach ? "green" : "blue"}
          w="24%"
        >
          {LessonTeacher.Coach}
        </Button>
        <Button
          transition={"background 0.5s ease-in-out;"}
          onClick={() => {
            switchInfoMod();
          }}
          colorScheme={infomode ? "green" : "blue"}
          w="24%"
        >
          {infomode ? "Режим изучения" : "Режим обучения"}
        </Button>
      </GridItem>
      <GridItem h="100%" colSpan={1} bg="papayawhip">
        <GirlOrdinaryInfo girl={current} />
        <VStack alignItems={"stretch"} gap={0}>
          <Text fontSize={12}>{money}$</Text>
          <Text fontSize={12}>Энергия</Text>
          <HStack justify={"start"}>{energyIndicator()}</HStack>
        </VStack>
      </GridItem>
      <GridItem h="100%" colSpan={1} bg="papayawhip">
      <LessonStatPanel
          stats={lessonGetDataForStatPanel("sexExp")}
        />       
      </GridItem>
      <GridItem h="100%" colSpan={1} bg="papayawhip">
      {`//`}
      </GridItem>

      <ActionModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} img={girlImg} text={modalText} />
    </Grid>
  );
});