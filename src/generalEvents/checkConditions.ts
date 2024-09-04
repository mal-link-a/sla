import {
  StatCondition,
  studiedSpecialStats,
  StudiedSpecialStats,
} from "../entities/StudiedStats";
import { slaveStore } from "../stores/slave/slave.store";

export const checkConditions = (conditions: StatCondition[]) => {
  const girl = slaveStore.slave;

  let failedConds: string[] = [];
  let check: boolean = false;

  for (let i = 0; i < conditions.length; i++) {
    let [param, value] = [conditions[i][0], conditions[i][1]];

    if (param as keyof StudiedSpecialStats) {
      if (girl.exp[param as keyof StudiedSpecialStats].level < value) {
        failedConds.push(studiedSpecialStats[param as keyof StudiedSpecialStats].name);
        check = true;
      }
    }
  }
  if (!check) {
    return false
  } else {
    return ("Подопечный не готов. Сперва ему нужно подтянуть навыки: " + failedConds.join(", ")+ ".")
  }
};