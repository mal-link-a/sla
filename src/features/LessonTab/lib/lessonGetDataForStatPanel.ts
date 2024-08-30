
import { Girl } from "../../../entities/Girl";
import { StatType } from "../../../entities/StudiedStats";
import { studiedAllStats } from "../../../entities/StudiedStats/model/allStats";


import { girlsInPossessionStore } from "../../../stores/girlsInPossession/girlsInPossession.store";
import { statPanelProp } from "../model/types";

export const lessonGetDataForStatPanel = (value: StatType | string) => {

  let girl = Object.entries(girlsInPossessionStore.selectedGirl.exp).map((item)=>[item[0], Object.values(item[1])]);
  let data = studiedAllStats;
  

  const finalArr=[]
  //return { blockName: value, stats: finalArr} as statPanelProp;
};
