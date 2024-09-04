import { ContributionType } from "../../../../entities/MentalStats/model/types";
import { slaveStore } from "../../../../stores/slave/slave.store"

export const checkContribution = (val: number): ContributionType => {
    const сontribution  = slaveStore.slave.mental.contribution;
    slaveStore.slave.mental.contribution = 0;
    
    //Недостаточное поощрение за работу
    if (val>0 && сontribution>0 && сontribution - val > 0)  {
        return ContributionType.InsufficientReward;
    }
    //Достаточное поощрение за работу
    if (val>0 && сontribution>0 && сontribution - val <= 0)  {  
        return ContributionType.ExcessiveReward;
    }
    //Сверхпоощрение за работу
    if (val>0 && сontribution>0 && сontribution - val <= -2)  { 
        return ContributionType.SufficientReward;
    }
    //Недостаточное наказание за проделки
    if (val<0 && сontribution<0 && сontribution - val > 0)  {        
        return ContributionType.InsufficientPunishment;
    }
    //Достаточное наказание за проделки
    if (val<0 && сontribution<0 && сontribution - val <= 0)  {
        return ContributionType.SufficientPunishment;
    }
    //Сверхнаказание за проделки
    if (val<0 && сontribution<0 && сontribution - val <= -2)  {
        return ContributionType.ExcessivePunishment;
    }
    //Незаслуженное наказание, хотя всё сделано гуд
    if (val<0 && сontribution>0)  {
        return ContributionType.UnfairPunishment;
    }
    //Незаслуженное наказание
    if (val<0 && сontribution===0)  {
        return ContributionType.UndeservedPunishment;
    }
    //Незаслуженное поощрение, хотя достойно наказания
    if (val>0 && сontribution>0)  {
        return ContributionType.UnfairReward;
    }
    //Незаслуженное Поощрение
    if (val>0 && сontribution===0)  {
        return ContributionType.UndeservedReward;
    }
    throw new Error("Передан ноль в checkContribution");
}