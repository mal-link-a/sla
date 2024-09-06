import { Flex, Box, HStack, Image, Text, VStack, Button } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { slaveMood } from "../../entities/Girl/model/slaveMood";
import { slaveStore } from "../../stores/slave/model/slave.store";
import { slaveImg } from "../../entities/Girl/model/imgPath";
import { dayEnd } from "../../shared/generalEvents/dayEnd";

interface Props {
  isColumn?: boolean;
}
export const SlaveOrdinaryInfo = observer(({ isColumn = true }: Props) => {
  const [name, energy, contribution, mood, id] = [
    slaveStore.slave.name,
    slaveStore.slave.energy,
    slaveStore.slave.mental.contribution,
    slaveStore.slave.mental.mood,
    slaveStore.slave.id,
  ];
  const img = `${process.env.PUBLIC_URL}/girls/${id}/${slaveImg.avatar}`;

  const energyIndicator = () => {
    let components = [];
    let energyIsExist = energy >= 0;
    for (
      let i = energyIsExist ? 0 : energy;
      energyIsExist ? i < energy : i < 0;
      i++
    ) {
      components.push(
        <Box
          key={"girl_e" + i}
          borderRadius={"50%"}
          w={4}
          h={4}
          bg={energyIsExist ? "green" : "red"}
        />
      );
    }
    return components;
  };

  const contributionText = () => {
    return contribution>0 ? `Отличился (${contribution})` : contribution < 0  ? `Провинился (${contribution})` : "Не ждёт награды";
  };
  return (
    <VStack>
    <Flex w="100%"
      justifyContent={"space-between"}
      flexDir={{base: "row", md: isColumn ? "column" : "row"}}
      minW= {{base: "290px", md: isColumn ? "150px" : "290px"}}
      gap={0}
    >
      <Image border={"6px groove #a1a1a1"} h="150px" w="150px" src={img} />
      <VStack flexGrow={1} justifyContent={"center"} minW={"50%"}>
        <Text>{name} </Text>
        <Text>{slaveMood[mood]} </Text>
        <VStack border={"1px groove #a1a1a1"}>
          <Text>Энергия</Text>
          <HStack minH={4} mb={1} justify={"center"}>
            {energyIndicator()}
          </HStack>
        </VStack>
        <Text>{contributionText()}</Text>
      </VStack>
      </Flex>
      <Button
          maxH="40px"
          w="100%"
        flexGrow={1}
        flexShrink={2}
        onClick={dayEnd}
      >
        Закончить день
      </Button>

    </VStack>
  );
});
