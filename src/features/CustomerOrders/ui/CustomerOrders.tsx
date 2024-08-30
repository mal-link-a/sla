import { FC } from "react";
import { Box, Button, Flex, Grid, VStack, Text, HStack, useToast } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { protagonistStore } from "../../../stores/protagonist/protagonist.store";
import { GirlOrdinaryInfo } from "../../../components/GirlOrdinaryInfo/GirlOrdinaryInfo";
import { girlsInPossessionStore } from "../../../stores/girlsInPossession/girlsInPossession.store";
import { girlSpendingStamina } from "../../../generalEvents/girlSpendingStamina";


export const CustomerOrders = observer(() => {
  const [money] = [protagonistStore.money];
  const toast = useToast();

const onClickWork = () => {
  const check = girlSpendingStamina(1);
  if (!check) {
    //Работа
    protagonistStore.earnMoney(100);
    girlsInPossessionStore.spendEnergy();
  } else {
    toast({
      title: "Не выполнено",
      description: check,
      duration: 10000,
      position: "top-left",
      isClosable: true,
    });
  }
}
console.log('render CustomerOrders');
  return (
    <Grid
    minH="100%"
    templateRows='1fr, 1fr'
    templateColumns='1fr'
    >
      <Text p={2}>Ты приходишь в здание своего офиса, олицетворения великолепного мира современной бизнес-индустрии. Это вполне обычное комфортабельное помещение, полное прекрасных рабочих мест. Каждый сотрудник, попавший сюда — это несомненный профессионал, как минимум умеющий ходить и писать своё имя.
        Старенькие корпоративные компьютеры, купленные на Авито, составляют компанию кипам документов на офисных столах. У стены гордо стоит кофеварка, заправляющая работников так нужной им энергией, а широкие окна повтоянно напоминают им, что солнце ещё высоко.
         Здесь твой любимый работник может принести весомый вклад в общество и незначительный — в твой карман, поработав над прекрасными запросами очаровательных клиентов.<br/>Денег на счету: {money}</Text>
        <Box>
          <Text>Выбрать работника</Text>
          <HStack>
          <GirlOrdinaryInfo girl={girlsInPossessionStore.selectedGirl}/>
          </HStack>
        </Box>
        <Button onClick={onClickWork} colorScheme='red'>Работать</Button>
    </Grid>
  );
});