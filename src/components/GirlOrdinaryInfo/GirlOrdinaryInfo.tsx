import {
    Box,
    Button,
    Grid,
    GridItem,
    HStack,
    Image,
    Text,
    VStack
  } from "@chakra-ui/react";
import { FC } from "react"
import { Girl, GirlImgPath } from "../../entities/Girl"
import { observer } from "mobx-react-lite";
import { girlMood } from "../../entities/Girl/model/girlMood";

interface Props {
    girl: Girl
}
export const GirlOrdinaryInfo:FC<Props> = observer(({girl}) => {
    const [energy] = [girl.energy];
    const girlImg = `${process.env.PUBLIC_URL}/girls/${girl.id}/${GirlImgPath.avatar}`;
    
    const energyIndicator = () => {
        let components = [];
        let energyIsExist = girl.energy>=0;
        
        for (let i = energyIsExist? 0  : energy ; energyIsExist? i < energy: i<0; i++) {
          components.push(<Box key={"girl_e"+i} borderRadius={"50%"} w={4} h={4} bg={energyIsExist? "green": "red"} />);
        }
        return components;
      };
    return (
        <VStack border={'1px solid black'} gap={0}>
        <Image
          border={"6px groove #a1a1a1"}
          h="150px"
          w="150px"
          src={girlImg}
        />
        <Text>{girl.name} </Text>
        <Text>{girlMood[girl.mood]} </Text>
        <Text>Энергия</Text>
        <HStack justify={"start"}>
        {energyIndicator()}
        </HStack>        
        </VStack>

    )

});