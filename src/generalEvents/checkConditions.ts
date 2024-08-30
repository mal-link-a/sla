import {
  StatCondition,
  studiedSexStats,
  StudiedSexStats,
} from "../entities/StudiedStats";
import { girlsInPossessionStore } from "../stores/girlsInPossession/girlsInPossession.store";

export const checkConditions = (conditions: StatCondition[]) => {
  const girl = girlsInPossessionStore.selectedGirl;

  let failedConds: string[] = [];
  let check: boolean = false;

  for (let i = 0; i < conditions.length; i++) {
    let [param, value] = [conditions[i][0], conditions[i][1]];

    if (param as keyof StudiedSexStats) {
      if (girl.exp[param as keyof StudiedSexStats].level < value) {
        failedConds.push(studiedSexStats[param as keyof StudiedSexStats].name);
        check = true;
      }
    }
  }
  if (!check) {
    return false
  } else {
    return ("Подопечная не готова. Сперва ей нужно подтянуть навыки: " + failedConds.join(", ")+ ".")
  }
};

