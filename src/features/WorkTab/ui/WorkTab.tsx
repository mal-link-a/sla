import {
  Box,
  Button,
  Flex,
  Grid,
  VStack,
  Text,
  HStack,
  useToast,
  GridItem,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { protagonistStore } from "../../../stores/protagonist/model/protagonist.store";
import { slaveStore } from "../../../stores/slave/model/slave.store";
import { girlSpendingStamina } from "../../../shared/check/girlSpendingStamina";
import { workPlaces } from "../../../entities/Workplaces/model/workPlaces";
import {
  BellIcon,
  LockIcon,
  CalendarIcon,
  ViewOffIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { slaveImg } from "../../../entities/Girl/model/imgPath";
import { SlaveImg } from "../../../entities/Girl";
import {
  WorkPlaces,
  WorkPlaceWithConditions,
} from "../../../entities/Workplaces/model/types";
import {
  StudiedSpecialStats,
  StudiedStats,
  StudiedStatWithСondition,
} from "../../../entities/StudiedStats";
import { studiedAllStats } from "../../../entities/StudiedStats/model/allStats";
import { checkConditions } from "../../../shared/check/checkConditions";
import { baseStore } from "../../../stores/Base/model/base.store";
import { SlaveOrdinaryInfo } from "../../../components/SlaveOrdinaryInfo/SlaveOrdinaryInfo";

const getRnd = (num: number) => {
  return Math.floor(Math.random() * (num + 1));
};
const rndIcon = () => {
  switch (getRnd(5)) {
    case 0: {
      return <BellIcon />;
    }
    case 1: {
      return <LockIcon />;
    }
    case 2: {
      return <CalendarIcon />;
    }
    case 3: {
      return <ViewOffIcon />;
    }
    case 4: {
      return <SunIcon />;
    }
  }
};

export const WorkTab = observer(() => {
  const [money, energy] = [protagonistStore.money, slaveStore.slave.energy];
  const toast = useToast();

  const showFailedToast = (text: string) => {
    toast({
      title: "Не выполнено",
      description: text,
      duration: 10000,
      position: "top-left",
      isClosable: true,
    });
  };

  //const onClick = (key: string, text: string, money: number) => {
  const onClick = (key: string) => {
    const imgPath = `${process.env.PUBLIC_URL}/girls/${slaveStore.slave.id}/${
      slaveImg[key as keyof SlaveImg]
    }`;

    const item = workPlaces[key as keyof WorkPlaces] as WorkPlaceWithConditions;

    const check = girlSpendingStamina(1);
    if (!check) {
      if (item.conditions?.length > 0) {
        let conditionCheck = checkConditions(item.conditions);
        console.log(conditionCheck);
        if (conditionCheck) {
          showFailedToast(conditionCheck);
          return;
        }
      }
      protagonistStore.earnMoney(item.salary);
      slaveStore.spendEnergy();
      baseStore.setModalData(true, imgPath, item.text);
    } else {
      toast({
        title: "Не выполнено",
        description: check,
        duration: 10000,
        position: "top-left",
        isClosable: true,
      });
    }
  };
  return (
    <Flex
      bg="#dddcf7"
      minW="100%"
      flexDir={"column"}
      minH="100%"
      justifyContent={"space-between"}
    >
      <Flex flexDir={{ base: "column", md: "row" }}>
        <SlaveOrdinaryInfo isColumn={true} />
        <Text p={4}>
          Ты приходишь в здание своего офиса, олицетворения великолепного мира
          современной бизнес-индустрии. Это вполне обычное комфортабельное
          помещение, полное прекрасных рабочих мест. Каждый сотрудник, попавший
          сюда — это несомненный профессионал, как минимум умеющий ходить и
          писать своё имя. Старенькие корпоративные компьютеры, купленные на
          Авито, составляют компанию кипам документов на офисных столах. У стены
          гордо стоит кофеварка, заправляющая работников так нужной им энергией,
          а широкие окна повтоянно напоминают им, что солнце ещё высоко. Здесь
          твой любимый работник может принести весомый вклад в общество и
          незначительный — в твой карман, поработав над прекрасными запросами
          очаровательных клиентов.
          <br />
          Денег на счету: {money}
          <br />
          {energy === 0
            ? "Солнце уже село..."
            : energy === 1
            ? "Солнце садится..."
            : "Солнце ещё высоко."}
        </Text>
      </Flex>

      <Flex
        gap={3}
        alignContent="center"
        flexWrap="wrap"
        flexDirection={"row"}
        m={6}
        mb={8}
      >
        {Object.entries(workPlaces).map((item) => (
          <Button
            key={item[0]}
            variant={"work"}
            h={16}
            borderRadius={8}
            leftIcon={rndIcon()}
            flexGrow={1}
            onClick={() => {
              onClick(item[0]);
            }}
          >
            {item[1].name}
          </Button>
        ))}
      </Flex>
    </Flex>
  );
});
