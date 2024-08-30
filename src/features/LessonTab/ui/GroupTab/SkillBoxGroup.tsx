import { Box, Flex, Text, GridItem, Heading } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { lessonGetDataForStatPanel } from "../../lib/lessonGetDataForStatPanel";
import { ComplicatedStats, complicatedStats } from "../../../../entities/StudiedStats";
import { girlsInPossessionStore } from "../../../../stores/girlsInPossession/girlsInPossession.store";
import { GirlExperience, statLevelColor, statLevelName } from "../../../../entities/Girl";
import { FC } from "react";
import { LessonStatParam } from "../LessonStatParam";
import { studiedAllStats } from "../../../../entities/StudiedStats/model/allStats";
import { SkillItemGroup } from "./SkillItemGroup";

interface Props {
  keyName: keyof ComplicatedStats
}
export const SkillBoxGroup:FC<Props> = observer(({keyName}) => {
  const stats = complicatedStats[keyName];
  const girl = girlsInPossessionStore.selectedGirl.exp

  const getCompicatedLevel = () =>{
    const getlvl = (arr: string[]) => {
      if (arr.length===0) 
        return 0;
      return Object.entries(studiedAllStats)
      .filter((item) => 
        arr.includes(item[0])
      ).map((item)=> girl[item[0] as keyof GirlExperience].level).reduce((curSum, curNum)=> curSum+ curNum,0);
    }
    const [t1, t2, t3] = [stats.tier1Stats as string[], stats.tier2Stats as string[] ,stats.tier3Stats as string[]];
    const maxvalue  =(t3.length *4 + t2.length *2+ t1.length)*5;
    if (t1) {
      const value = getlvl(t1) + getlvl(t2)*2 + getlvl(t3)*4;
      const result = Math.floor(value/maxvalue*5)
      const spanStyle = {  
        color: statLevelColor[result],
      };
      return <span style={spanStyle} >{statLevelName[result]}</span>
    }
  }
  return (
      <GridItem p={1} border="1px solid #D4CCE1" display="flex" flexDirection={"column"} w="100%" h="100%" bg="papayawhip">
       <Box h="10%">
            <Text size='sm'>Уровень владения: {getCompicatedLevel()}</Text>
        </Box>
        <SkillItemGroup keyName={keyName} header={"Прямое влияние"} techLevel={"tier3Stats"} />
        <SkillItemGroup keyName={keyName} header={"Вспомогательное"} techLevel={"tier2Stats"}/>
        <SkillItemGroup keyName={keyName} header={"Опосредованное"} techLevel={"tier1Stats"}/>
       </GridItem>     
  );
});