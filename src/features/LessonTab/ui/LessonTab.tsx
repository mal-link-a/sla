import { Button, Grid, GridItem } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

import { slaveStore } from "../../../stores/slave/slave.store";
import { lessonTabStore } from "../model/lessonTab.store";
import { SlaveOrdinaryInfo } from "../../../components/SlaveOrdinaryInfo/SlaveOrdinaryInfo";
import { ShowMode, Teacher } from "../model/types";
import { LessonTabSingles } from "./SinglesTab/LessonTabSingles";
import { LessonTabGroups } from "./GroupTab/LessonTabGroups";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE } from "../../../routes";
import { NavigationTabs } from "../../../components/NavigationTabs.tsx/NavigationTabs";
import { slaveImg } from "../../../entities/Girl/model/imgPath";

//TODO В пропсах число получаем от 0 до 10. Написать на ts проверку на диапазон
export const LessonTab = observer(() => {
  const [infomode, switchInfoMod, teacher, setTeacher, current] = [
    lessonTabStore.infoMode,
    lessonTabStore.switchInfoMod,
    lessonTabStore.teacher,
    lessonTabStore.setTeacher,
    slaveStore.slave,
  ];

  const tabs = [
    {
      id: ShowMode.single,
      pattern: ROUTE.LESSON.SINGLE.PATTERN,
      label: "Простой",
      img: `${process.env.PUBLIC_URL}/girls/${slaveStore.slave.id}/${slaveImg.normal}`,
    },
    {
      id: ShowMode.groups,
      pattern: ROUTE.LESSON.GROUPS.PATTERN,
      label: "Группы",
      img: `${process.env.PUBLIC_URL}/girls/${slaveStore.slave.id}/${slaveImg.normal}`,
    },
  ];

  return (
    <Grid
      minH={"100%"}
      templateRows="40px 1fr"
      templateColumns="150px 1fr"
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
            setTeacher(Teacher.Me);
          }}
          isDisabled={infomode}
          colorScheme={teacher === Teacher.Me ? "green" : "blue"}
          w="24%"
        >
          {Teacher.Me}
        </Button>
        <Button
          onClick={() => {
            setTeacher(Teacher.Assistant);
          }}
          isDisabled={infomode}
          colorScheme={teacher === Teacher.Assistant ? "green" : "blue"}
          w="24%"
        >
          {Teacher.Assistant}
        </Button>
        <Button
          onClick={() => {
            setTeacher(Teacher.Coach);
          }}
          isDisabled={infomode}
          colorScheme={teacher === Teacher.Coach ? "green" : "blue"}
          w="24%"
        >
          {Teacher.Coach}
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
        <SlaveOrdinaryInfo />
        <NavigationTabs tabs={tabs} dir="column" />
      </GridItem>
      <Routes>
        <Route
          path={ROUTE.LESSON.GROUPS.PATTERN}
          element={<LessonTabGroups />}
        />
        <Route
          path={ROUTE.LESSON.SINGLE.PATTERN}
          element={<LessonTabSingles />}
        />
        <Route
          path={"*"}
          element={<Navigate to={ROUTE.LESSON.SINGLE.PATTERN} replace={true} />}
        />
      </Routes>
    </Grid>
  );
});
