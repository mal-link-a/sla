import {
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";

import { girlsInPossessionStore } from "../../../stores/girlsInPossession/girlsInPossession.store";
import { lessonTabStore } from "../model/lessonTab.store";
import { protagonistStore } from "../../../stores/protagonist/protagonist.store";
import { GirlOrdinaryInfo } from "../../../components/GirlOrdinaryInfo/GirlOrdinaryInfo";
import { ActionModal } from "../../../components/ActionModal/ActionModal";
import { ShowMode, Teacher } from "../model/types";
import { GirlImg, GirlImgPath } from "../../../entities/Girl";
import { LessonTabSingles } from "./LessonTabSingles";
import { LessonTabGroups } from "./GroupTab/LessonTabGroups";
import { Navigate, Route, Routes, useNavigate  } from "react-router-dom";
import { ROUTE } from "../../../routes";
import { NavigationTabs } from "../../../components/NavigationTabs.tsx/NavigationTabs";

//TODO В пропсах число получаем от 0 до 10. Написать на ts проверку на диапазон
export const LessonTab = observer(() => {
  const [
    infomode,
    switchInfoMod,
    teacher,
    setTeacher,
    showMode,
    setShowMode,
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
    lessonTabStore.showMode,
    lessonTabStore.setShowMode,
    girlsInPossessionStore.selectedGirl,
    protagonistStore.energy,
    protagonistStore.money,
    lessonTabStore.modalIsOpen,
    lessonTabStore.setModalIsOpen,
    lessonTabStore.modalImg,
    lessonTabStore.modalText,
  ];
  const navigate = useNavigate();

  const tabs = [
    {
      id: ShowMode.single,
      pattern: ROUTE.LESSON.SINGLE.PATTERN,
      label: "Простой",
      img: `${process.env.PUBLIC_URL}/girls/${girlsInPossessionStore.selectedGirl.id}/_normal.png`,
    },
    {
      id: ShowMode.groups,
      pattern: ROUTE.LESSON.GROUPS.PATTERN,
      label: "Группы",
      img: `${process.env.PUBLIC_URL}/girls/${girlsInPossessionStore.selectedGirl.id}/_normal.png`,
    },    
  ];

  const girlImg = `${process.env.PUBLIC_URL}/girls/${
    girlsInPossessionStore.selectedGirl.id
  }/${GirlImgPath[modalImg as keyof GirlImg]}`;

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
        <GirlOrdinaryInfo girl={current} />        
        <NavigationTabs tabs={tabs} dir="column"/>
      </GridItem>
      <Routes>
        <Route path={ROUTE.LESSON.GROUPS.PATTERN} element={<LessonTabGroups />} />
        <Route path={ROUTE.LESSON.SINGLE.PATTERN} element={<LessonTabSingles />} />  
        <Route path={'*'} element={
                <Navigate to={ROUTE.LESSON.SINGLE.PATTERN} replace={true} />
              } />        
      </Routes>     
      <ActionModal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        img={girlImg}
        text={modalText}
      />

    </Grid>
  );
});
