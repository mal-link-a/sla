import { Box, Heading, Flex } from "@chakra-ui/react"
import { GirlExperience } from "../../../../entities/Girl";
import { studiedAllStats } from "../../../../entities/StudiedStats/model/allStats";
import { slaveStore } from "../../../../stores/slave/slave.store";
import { LessonStatParam } from "../LessonStatParam";
import { ComplicatedStat, complicatedStats, ComplicatedStats } from "../../../../entities/StudiedStats";

interface Props {
    keyName: keyof ComplicatedStats
    header: string;
    techLevel: keyof ComplicatedStat
  }

export const SkillItemGroup=({keyName, header, techLevel}: Props) => {
    const stats = complicatedStats[keyName];

    const getData = (keys: string[]) => {
        return Object.entries(studiedAllStats)
          .filter((item) => 
            keys.includes(item[0])
          )
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

    return (
        <Box mb={1} border="5px double #8049A4" h="30%">
            <Heading textAlign={"center"} as='h2' size='sm'>{header}</Heading>
            <Flex border="1px solid #8049A4" justifyContent={"space-around"}  gap={1}wrap={"wrap"}>{getData(stats[techLevel] as string[])}</Flex>
        </Box>
    )
}