import {
  Flex,
  Box,
  Grid,
  Heading,
  HStack,
  VStack,
  Text,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { InfluenceMenuList } from "./InfluenceMenuList";
import { InfluenceEnum } from "../model/types/types";
import { SlaveOrdinaryInfo } from "../../../components/SlaveOrdinaryInfo/SlaveOrdinaryInfo";
import { moodText, obedienceText } from "../model/obedienceText";
import { slaveStore } from "../../../stores/slave/model/slave.store";

export const InfluenceTab = observer(() => {
  const obediensekey = Math.max(
    slaveStore.slave.mental.obedience - slaveStore.slave.mental.rejection,
    0
  );
  return (
    <>
      <Flex bg="#dcf7f6" w="100%" flexDir={{ base: "column", md: "row" }}>
        <SlaveOrdinaryInfo isColumn={true} />
        <Box p={2} flexGrow={1}>
          <Text>{moodText[slaveStore.slave.mental.mood]}</Text>
          <Text>{obedienceText[obediensekey]}</Text>
        </Box>
      </Flex>
      <Flex
        pb={2}
        flexGrow={1}
        flexDir={{ base: "column", md: "row" }}
        bg="#dcf7f6"
        alignItems={"center"}
        justifyContent={"space-around"}
      >
        <VStack
          w={"100%"}
          flexGrow={1}
          pb={{ base: 4, md: 0 }}
          borderTop="1px solid #5CA415"
        >
          <Heading size="sm" as="h3">
            Поощрения
          </Heading>
          <InfluenceMenuList filterType={InfluenceEnum.positive} />
        </VStack>

        <VStack
          w={"100%"}
          flexGrow={1}
          pt={{ base: 4, md: 0 }}
          borderTop="1px solid #5CA415"
        >
          <Heading size="sm" as="h3">
            Наказания
          </Heading>
          <InfluenceMenuList filterType={InfluenceEnum.negative} />
        </VStack>
      </Flex>
    </>
  );
});
