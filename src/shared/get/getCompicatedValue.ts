import { slaveStore } from "../../stores/slave/model/slave.store";
import { GirlExperience } from "../../entities/Girl";
import { studiedAllStats } from "../../entities/StudiedStats/model/allStats";
import { ComplicatedStat } from "../../entities/StudiedStats/model/types";

export const getCompicatedValue = (stats : ComplicatedStat): number =>{
    const girl = slaveStore.slave.exp;    
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
    const value = getlvl(t1) + getlvl(t2)*2 + getlvl(t3)*4;
    return Math.floor(value/maxvalue*5);      
    
  }