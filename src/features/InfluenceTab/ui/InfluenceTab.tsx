
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
import { slaveStore } from "../../../stores/slave/slave.store";

export const InfluenceTab = observer(() => {
  return (
    <>
    <Grid mb={2}
      templateColumns="repeat(2, 1fr)"      
      alignItems={"start"}
      justifyContent={"space-around"}
    >
      <VStack border="1px solid #5CA415">
        <Heading as="h3">Поощрения</Heading>
        <InfluenceMenuList  filterType={InfluenceEnum.positive} />
      </VStack>

      <VStack border="1px solid #5CA415">
        <Heading as="h3">Наказания</Heading>
        <InfluenceMenuList filterType={InfluenceEnum.negative} />
      </VStack>
    </Grid>
    <Flex minW="100%">
      <SlaveOrdinaryInfo isColumn={false}/>
      <Box p={2} flexGrow={1} border="1px solid #5CA415">
      <Text>{moodText[slaveStore.slave.mental.mood]}</Text>
      <Text>{obedienceText[slaveStore.slave.mental.obedience]}</Text>
      </Box>
      
    </Flex>
    </>
    
  );
  
});
