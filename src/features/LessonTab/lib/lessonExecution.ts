import { expBase,} from "../../../entities/Girl";
import { girlsInPossessionStore } from "../../../stores/girlsInPossession/girlsInPossession.store";

export const lessonExecution = (  
  keyName: string,
  level: number,
  exp: number
) => {
  let isLvlup = false;
  const val: any = {level,exp:exp+25};  
  while (true) {
    if (val.exp >= expBase[val.level] && val.level !== 5) {
      val.exp = val.exp - expBase[val.level];
      val.level++;
      isLvlup = true;
    } else {
      break;
    }
  }
  if (val.level === 10) {
    val.exp = 0;
  } 
  girlsInPossessionStore.trainGirl(keyName, val);
  return (isLvlup);
};
