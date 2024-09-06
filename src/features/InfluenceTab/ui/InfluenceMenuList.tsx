import { texts } from "../model/texts";
import { InfluenceEnum, influenceType } from "../model/types/types";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { girlSpendingStamina } from "../../../shared/check/girlSpendingStamina";

interface Props {
  filterType: InfluenceEnum;
}

export const InfluenceMenuList = ({ filterType }: Props) => {
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
  const onClick = (num: number, cb: (num: number) => void) => {
    toast.closeAll();
    const energyCheck = girlSpendingStamina(1);
    if (!energyCheck) {
      cb(num);
    } else {
      showFailedToast(energyCheck);
    }
  };

  const menuItem = (arr: influenceType) => {
    let finalArr = [];
    for (let i = 0; i < arr.text.length; i++) {
      finalArr.push(
        <MenuItem
         maxW={"80vw"}
          key={arr.text[i].name}
          onClick={() => {
            onClick(i, arr.callBack);
          }}
        >
          {arr.text[i].name}
        </MenuItem>
      );
    }
    return finalArr;
  };

  return (
    <>
      {Object.values(texts)
        .filter((item) => item.type === filterType)
        .map((item) => (
          <Menu key={item.name}>
            <MenuButton w="80%" as={Button} rightIcon={<ChevronDownIcon />}>
              {item.name}
            </MenuButton>
            <MenuList >{menuItem(item)}</MenuList>
          </Menu>
        ))}
    </>
  );
};
