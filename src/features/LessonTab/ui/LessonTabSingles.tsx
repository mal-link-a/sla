import { GridItem } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { lessonGetDataForStatPanel } from "../lib/lessonGetDataForStatPanel";
import { StatType, studiedSexStats } from "../../../entities/StudiedStats";
import { girlsInPossessionStore } from "../../../stores/girlsInPossession/girlsInPossession.store";
import { Girl, GirlExperience } from "../../../entities/Girl";
import { LessonStatParam } from "./LessonStatParam";
import { studiedAllStats } from "../../../entities/StudiedStats/model/allStats";

export const LessonTabSingles = observer(() => {
  const getData= (val:StatType) => {
    return Object.entries(studiedAllStats).filter((item)=> item[1].type === val).map((item)=> {
const [keyName, name, description] = [item[0], item[1].name, item[1].description];
const experience = girlsInPossessionStore.selectedGirl.exp[keyName as keyof GirlExperience];
return <LessonStatParam key={keyName} keyName={keyName} name={name} description={description} level={experience.level} exp={experience.exp} />
})
  }
  
  return (
    <>
       <GridItem display={"grid"} gridTemplateColumns="1fr 1fr" h="100%" colSpan={1} bg="papayawhip">
        <GridItem>
        {getData(StatType.sexual)}
        </GridItem>
        <GridItem>
        {getData(StatType.normal)}
        </GridItem>
      </GridItem>     
    </>
  );
});