import { texts } from "../model/texts"
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
import { InfluenceEnum, influenceNegativeTypes, influencePositiveTypes, influenceText, influenceType, influenceTypes } from "../model/types/types";
import { text } from "stream/consumers";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";


interface Props {
    filterType: InfluenceEnum;
}

export const InfluenceMenuList = ({filterType}: Props) => {
    const menuItem = (arr: influenceType) => {        
        let finalArr=[];
        for (let i=0; i< arr.text.length; i++) {
            finalArr.push( <MenuItem onClick={()=>{arr.callBack(i)}}>{arr.text[i].name}</MenuItem>)
        }
        return finalArr;
    }
    
    
    return ( <>
    {Object.values(texts).filter((item)=>item.type === filterType).map((item)=> 
        <Menu>
          <MenuButton w="80%" as={Button} rightIcon={<ChevronDownIcon />}>
          {item.name}
          </MenuButton>
          <MenuList>
            {menuItem(item)}
          </MenuList>
        </Menu> 
    )}
    </>
    )
}