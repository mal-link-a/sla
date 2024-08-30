
import { Girl } from "../../../entities/Girl";
import { studiedSexStats } from "../../../entities/StudiedStats/model/sexStats";
import { StudiedSexStats } from "../../../entities/StudiedStats/model/types";

import { girlsInPossessionStore } from "../../../stores/girlsInPossession/girlsInPossession.store";
import { statPanelProp } from "../model/types";

export const lessonGetDataForStatPanel = (value: string) => {
  if (!girlsInPossessionStore.selectedGirl[value as keyof Girl]) {
    throw new Error("Ошибка в lessonGetDataForStatPanel — Неверное значение ключа")    
  }
  let girl = Object.entries(girlsInPossessionStore.selectedGirl[value as keyof Girl]).map((item)=>[item[0], Object.values(item[1])]);
  let finalArr: any[] = [];
  for (let i=0; i< girl.length; i++) {
    let obj: any = {};
    obj.key = girl[i][0];
    obj.level = girl[i][1][0];
    obj.exp = girl[i][1][1];
    obj.name = studiedSexStats[girl[i][0] as keyof StudiedSexStats].name;
    obj.description = studiedSexStats[girl[i][0] as keyof StudiedSexStats].description;
    finalArr.push(obj);
  }
  return { blockName: value, stats: finalArr} as statPanelProp;
};
