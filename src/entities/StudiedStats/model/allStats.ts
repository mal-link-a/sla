import { complicatedStats } from "./complicatedStats";
import { studiedNormalStats } from "./normalStats";
import { studiedSpecialStats } from "./specialStats";
import { StudiedStats } from "./types";

export const studiedAllStats:StudiedStats = Object.assign({},studiedSpecialStats, studiedNormalStats, complicatedStats)