export interface StudiedStat {
  name: string;
  description: string;
  lessonText: string[];
}
//Статы с требованиями
export interface StudiedStatWithСondition extends StudiedStat {
  conditions: StatCondition[];
}
export type StatCondition = [
  keyof StudiedSpecialStats | keyof StudiedNormalStats,
  number
];



export type StudiedSpecialStats = {
  singing: StudiedStat;
  dance: StudiedStat;
  systemAdministration: StudiedStat;
  programming: StudiedStat;
  coffeeBrewing: StudiedStat;
  doctoring: StudiedStat;
  firstAid: StudiedStat;
  surgery: StudiedStat;
};
export type StudiedNormalStats = {
  driving: StudiedStat;
  userPC: StudiedStat;
  management: StudiedStat;
  preventionOfAccidents: StudiedStat;
  construction: StudiedStat;
  heavyMachinery: StudiedStat;
  factoryMachines: StudiedStat;
  technicalProcess: StudiedStat;
};
export type StudiedStats = StudiedNormalStats & StudiedSpecialStats;
//Комплексные типы
export interface ComplicatedStats {
  showman: ComplicatedStat;
  factoryman: ComplicatedStat;
  constructor: ComplicatedStat;
  secretary: ComplicatedStat;
  boss: ComplicatedStat;
  doctor: ComplicatedStat;
  sysadmin: ComplicatedStat;
  programmer: ComplicatedStat;
  paragon: ComplicatedStat;
}

export interface ComplicatedStat extends StudiedStat {
  tier1Stats: (keyof StudiedSpecialStats | keyof StudiedNormalStats)[] | null;
  tier2Stats: (keyof StudiedSpecialStats | keyof StudiedNormalStats)[] | null;
  tier3Stats: (keyof StudiedSpecialStats | keyof StudiedNormalStats)[] | null;
}
