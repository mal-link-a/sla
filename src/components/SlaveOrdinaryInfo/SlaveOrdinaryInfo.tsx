import { Flex, Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { GirlImgPath } from "../../entities/Girl";
import { observer } from "mobx-react-lite";
import { slaveMood } from "../../entities/Girl/model/slaveMood";
import { slaveStore } from "../../stores/slave/slave.store";

interface Props {
  isColumn?: boolean;
}

export const SlaveOrdinaryInfo = observer(({ isColumn = true }: Props) => {
  const [slave, energy] = [slaveStore.slave, slaveStore.slave.energy];
  const slaveImg = `${process.env.PUBLIC_URL}/girls/${slave.id}/${GirlImgPath.avatar}`;

  const energyIndicator = () => {
    let components = [];
    let energyIsExist = slave.energy >= 0;
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
  return (
    <Flex
      flexDir={isColumn ? "column" : "row"}
      minW={isColumn ? "150px" : "300px"}
      border={"1px solid black"}
      gap={0}
    >
      <Image border={"6px groove #a1a1a1"} h="150px" w="150px" src={slaveImg} />
      <VStack justifyContent={"center"} minW={"50%"}>
        <Text>{slave.name} </Text>
        <Text>{slaveMood[slave.mental.mood]} </Text>
        <VStack border={"1px groove #a1a1a1"}>
          <Text>Энергия</Text>
          <HStack minH={4} mb={1} justify={"center"}>
            {energyIndicator()}
          </HStack>
        </VStack>
      </VStack>
    </Flex>
  );
});
