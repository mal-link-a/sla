import { texts } from "../model/texts"
import { InfluenceEnum, influenceType } from "../model/types/types";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";


interface Props {
    filterType: InfluenceEnum;
}

export const InfluenceMenuList = ({filterType}: Props) => {
    const menuItem = (arr: influenceType) => {        
        let finalArr=[];
        for (let i=0; i< arr.text.length; i++) {
            finalArr.push( <MenuItem key={arr.text[i].name} onClick={()=>{arr.callBack(i)}}>{arr.text[i].name}</MenuItem>)
        }
        return finalArr;
    }
    
    
    return ( <>
    {Object.values(texts).filter((item)=>item.type === filterType).map((item)=> 
        <Menu key={item.name}>
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