import { StatType, StudiedNormalStats, StudiedSexStats, studiedSexStats, StudiedStats } from "../entities/StudiedStats";
import { studiedAllStats } from "../entities/StudiedStats/model/allStats";
import { studiedNormalStats } from "../entities/StudiedStats/model/normalStats";

export const getStatByType = (value:StatType| string = "all") => {
    type MyOmit<T, K> = { [K in keyof T as K extends K ? never : K]: T[K] };
    switch (value) {
        default: {
            return studiedAllStats;
        }
        case (StatType.normal): {            
            const ara: MyOmit<StudiedStats, StudiedSexStats> = studiedAllStats;
            console.log('ara');
            console.log(ara);
            break;
        }
        case (StatType.sexual): {
            const ara: MyOmit<StudiedStats, StudiedSexStats> = studiedAllStats;
            console.log('ara');
            console.log(ara);
            break;
        }
    }

}