import { GridItem } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { slaveStore } from "../../../../stores/slave/model/slave.store";
import { GirlExperience } from "../../../../entities/Girl";
import { LessonStatParam } from "../LessonStatParam";
import { studiedAllStats } from "../../../../entities/StudiedStats/model/allStats";
import { studiedNormalStatsKeys } from "../../../../entities/StudiedStats/model/normalStats";
import { studiedSpecialStatsKeys } from "../../../../entities/StudiedStats";

const getData = (val: string[]) => {
  return Object.entries(studiedAllStats)
    .filter((item) => val.includes(item[0]))
    .map((item) => {
      const [keyName, name, description] = [
        item[0],
        item[1].name,
        item[1].description,
      ];
      const experience =
        slaveStore.slave.exp[
          keyName as keyof GirlExperience
        ];
      return (
        <LessonStatParam
          key={keyName}
          keyName={keyName}
          name={name}
          description={description}
          level={experience.level}
          exp={experience.exp}
        />
      );
    });
};

export const LessonTabSingles = observer(() => { 
  return (
    <>
      <GridItem     
        display={"flex"}
        flexDir={{base: "column", sm:"row"}}
        alignItems={"center"}
        
        justifyContent="space-evenly"
        h="100%"
        colSpan={1}
      >
        <GridItem display={"flex"} flexDir={"column"} alignItems={"center"}>
          {getData(studiedNormalStatsKeys)}
        </GridItem>
        <GridItem display={"flex"} flexDir={"column"}>
          {getData(studiedSpecialStatsKeys)}
        </GridItem>
      </GridItem>
    </>
  );
});
