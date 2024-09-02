import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Grid,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { compliment } from "../lib/compliment";
import { extreme } from "../lib/extreme";
import { embarrassment } from "../lib/embarrassment";
import { flagellation } from "../lib/flagellation";
import { strictRules } from "../lib/strictRules";
import { revocationOfPrivileges } from "../lib/revocationOfPrivileges";
import { censure } from "../lib/censure";
import { sweetness } from "../lib/sweetness";
import { gift } from "../lib/gift";
import { emotional } from "../lib/emotional";
import { freeTime } from "../lib/freeTime";
import { timeTogether } from "../lib/timeTogether";
import { InfluenceMenuList } from "./InfluenceMenuList";
import { InfluenceEnum } from "../model/types/types";

export const InfluenceTab = observer(() => {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      alignItems={"start"}
      justifyContent={"space-around"}
    >
      <VStack border="1px solid #5CA415">
        <Heading as="h3">Поощрения</Heading>
        <InfluenceMenuList filterType={InfluenceEnum.positive} />
      </VStack>

      <VStack border="1px solid #5CA415">
        <Heading as="h3">Наказания</Heading>
        <InfluenceMenuList filterType={InfluenceEnum.negative} />
      </VStack>
    </Grid>
  );
  
});
