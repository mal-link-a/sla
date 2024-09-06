import {
  ComplicatedStats,
  StatCondition,
  StudiedNormalStats,
  studiedSpecialStats,
  StudiedSpecialStats,
} from "../../entities/StudiedStats";
import { studiedAllStats } from "../../entities/StudiedStats/model/allStats";
import { complicatedStats } from "../../entities/StudiedStats/model/complicatedStats";
import { studiedNormalStats } from "../../entities/StudiedStats/model/normalStats";
import { slaveStore } from "../../stores/slave/model/slave.store";
import { getCompicatedValue } from "../get/getCompicatedValue";

export const checkConditions = (conditions: StatCondition[]): string | false => {
  const slave = slaveStore.slave;

  let failedConds: string[] = [];
  let check: boolean = false;

  for (let i = 0; i < conditions.length; i++) {
    let [param, value] = [conditions[i][0], conditions[i][1]];

    if (complicatedStats[param as keyof ComplicatedStats] !== undefined) {
      const slaveLvl = getCompicatedValue(complicatedStats[param as keyof ComplicatedStats])
      if (slaveLvl < value) {
        failedConds.push(complicatedStats[param as keyof ComplicatedStats].name);
        check = true;
      }
    } else  {
      if (slave.exp[param as keyof StudiedSpecialStats].level < value) {
        failedConds.push(studiedAllStats[param as keyof StudiedSpecialStats].name);
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