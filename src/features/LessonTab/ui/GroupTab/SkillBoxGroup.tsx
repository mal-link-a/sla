import { Box, Flex, Text, GridItem, Heading } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { ComplicatedStats } from "../../../../entities/StudiedStats";
import {} from "../../../../stores/slave/model/slave.store";
import { statLevelColor, statLevelName } from "../../../../entities/Girl";
import { FC } from "react";
import { SkillItemGroup } from "./SkillItemGroup";
import { getCompicatedValue } from "../../../../shared/get/getCompicatedValue";
import { complicatedStats } from "../../../../entities/StudiedStats/model/complicatedStats";

interface Props {
  keyName: keyof ComplicatedStats;
}

export const SkillBoxGroup: FC<Props> = observer(({ keyName }) => {
  const stats = complicatedStats[keyName];
  const value = getCompicatedValue(stats);

  return (
    <GridItem
      p={1}
      border="1px solid #D4CCE1"
      display="flex"
      flexDirection={"column"}
      w="100%"
      h="100%"
      bg="papayawhip"
    >
      <Box h="10%">
        <Text size="sm">
          Уровень владения:{" "}
          <span
            style={{
              color: statLevelColor[value],
            }}
          >
            {statLevelName[value]}
          </span>
        </Text>
      </Box>
      <SkillItemGroup
        keyName={keyName}
        header={"Прямое влияние"}
        techLevel={"tier3Stats"}
      />
      <SkillItemGroup
        keyName={keyName}
        header={"Вспомогательное"}
        techLevel={"tier2Stats"}
      />
      <SkillItemGroup
        keyName={keyName}
        header={"Опосредованное"}
        techLevel={"tier1Stats"}
      />
    </GridItem>
  );
});
