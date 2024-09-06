import { Button, GridItem, Select } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { ComplicatedStats } from "../../../../entities/StudiedStats";
import { useState } from "react";
import { SkillBoxGroup } from "./SkillBoxGroup";
import { complicatedStats } from "../../../../entities/StudiedStats/model/complicatedStats";

export const LessonTabGroups = observer(() => {
  const [currentGroup, setGroup] = useState<keyof ComplicatedStats>("showman");

  const getGroups = () => {
    let arr = [];
    for (let key in complicatedStats) {
      let active = key === currentGroup;
      let name = complicatedStats[key as keyof ComplicatedStats].name;
      arr.push(
        <Button
          key={key}
          bg={active ? "#1E90FF" : "#274487"}
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

  const selectGroups = () => {
    let arr = [];
    for (let key in complicatedStats) {
      let name = complicatedStats[key as keyof ComplicatedStats].name;
      arr.push(
        <option data-name={name} key={key}>
          {name}
        </option>
      );
    }
    return arr;
  };
  return (
    <>
      <GridItem
        padding={2}
        display={"grid"}
        gridTemplateColumns={{ base: "1fr", sm: "3fr 7fr" }}
        gridTemplateRows={{ base: "50px 1fr", sm: "1fr" }}
        h="100%"
        colSpan={1}
        bg="papayawhip"
      >
        <GridItem display={{ base: "block", sm: "none" }}>
          <Select
            display={{ base: "block", sm: "none" }}
            placeholder="Выберите группу"
            onChange={(e) => {
              for (let key in complicatedStats) {
                if (
                  complicatedStats[key as keyof ComplicatedStats].name ===
                  e.target.value
                ) {
                  setGroup(key as keyof ComplicatedStats);
                }
              }
            }}
          >
            {selectGroups()}
          </Select>
        </GridItem>
        <GridItem
          p={4}
          pt={16}
          h="auto"
          display={{ base: "none", sm: "block" }}
        >
          {getGroups()}
        </GridItem>
        <SkillBoxGroup keyName={currentGroup} />
      </GridItem>
    </>
  );
});
