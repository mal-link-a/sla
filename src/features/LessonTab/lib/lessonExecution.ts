import { expBase,} from "../../../entities/Girl";
import { slaveStore } from "../../../stores/slave/slave.store";

export const lessonExecution = (  
  keyName: string,
  level: number,
  exp: number,
  motivation: number,
) => {
  let isLvlup = false;
  const val: any = {level,exp:exp+10*motivation};  
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
  slaveStore.trainGirl(keyName, val, motivation);
  return (isLvlup);
};
