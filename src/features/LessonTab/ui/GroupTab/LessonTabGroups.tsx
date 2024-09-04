import { Button, GridItem } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import {
  ComplicatedStats,
  complicatedStats,
} from "../../../../entities/StudiedStats";
import { useState } from "react";
import { SkillBoxGroup } from "./SkillBoxGroup";

export const LessonTabGroups = observer(() => {
  const [currentGroup, setGroup] =
    useState<keyof ComplicatedStats>("showman");



  const getGroups = () => {
    let arr = [];
    for (let key in complicatedStats) {
      let active = key === currentGroup;
      let name = complicatedStats[key as keyof ComplicatedStats].name;
      arr.push(
        <Button key={key}
          _hover={{
            background: "#00BFFF",
          }}
          bg={active ? "#1E90FF" : "#B0C4DE"}
          opacity={0.6}
          onClick={() => {
            setGroup(key as keyof ComplicatedStats);
          }}
          border="1px solid #D4CCE1"
          borderRadius={0}
          w={"100%"}
        >
          {name}
        </Button>
      );
    }
    return arr;
  };
  return (
    <>
      <GridItem
        display={"grid"}
        gridTemplateColumns="250px 1fr"
        h="100%"
        colSpan={1}
        bg="papayawhip"
      >
        <GridItem >
          Обычные навыки
          {getGroups()}
        </GridItem>
        <SkillBoxGroup keyName={currentGroup} />
      </GridItem>
    </>
  );
});
