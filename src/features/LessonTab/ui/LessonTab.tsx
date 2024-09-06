import { Button, Grid, GridItem } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

import { slaveStore } from "../../../stores/";
import { lessonTabStore } from "../model/lessonTab.store";
import { SlaveOrdinaryInfo } from "../../../components/SlaveOrdinaryInfo/SlaveOrdinaryInfo";
import { ShowMode, Teacher } from "../model/types";
import { LessonTabSingles } from "./SinglesTab/LessonTabSingles";
import { LessonTabGroups } from "./GroupTab/LessonTabGroups";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE } from "../../../routes";
import { NavigationTabs } from "../../../components/NavigationTabs.tsx/NavigationTabs";
import { slaveImg } from "../../../entities/Girl/model/imgPath";
import { dayEnd } from "../../../shared/generalEvents/dayEnd";

//TODO В пропсах число получаем от 0 до 10. Написать на ts проверку на диапазон
export const LessonTab = observer(() => {
  const [infomode, switchInfoMod, teacher, setTeacher] = [
    lessonTabStore.infoMode,
    lessonTabStore.switchInfoMod,
    lessonTabStore.teacher,
    lessonTabStore.setTeacher,
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
      templateRows={{ base: "275px 1fr", md: "1fr 50px" }}
      templateColumns={{ base: "1fr", md: "150px 1fr" }}
      gap={0}
      bg="papayawhip"
      h="100%"
    >
      <GridItem h="100%" colSpan={1} rowSpan={1}>
        <SlaveOrdinaryInfo />
        <NavigationTabs tabs={tabs} dir="column" />
      </GridItem>
      <GridItem>
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
            element={
              <Navigate to={ROUTE.LESSON.SINGLE.PATTERN} replace={true} />
            }
          />
        </Routes>
      </GridItem>
    </Grid>
  );
});
