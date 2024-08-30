import { studiedNormalStats } from "./normalStats";
import { studiedSexStats } from "./sexStats";
import { StudiedStats } from "./types";

export const studiedAllStats:StudiedStats = Object.assign({},studiedSexStats, studiedNormalStats)