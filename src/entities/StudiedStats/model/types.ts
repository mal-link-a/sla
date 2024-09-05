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
  keyof StudiedSpecialStats | keyof StudiedNormalStats | keyof ComplicatedStats,
  number
];



export type StudiedSpecialStats = {
  singing: StudiedStat;
  dance: StudiedStat;
  systemAdministration: StudiedStatWithСondition;
  programming: StudiedStatWithСondition;
  coffeeBrewing: StudiedStat;
  doctoring: StudiedStatWithСondition;
  firstAid: StudiedStat;
  surgery: StudiedStatWithСondition;
};
export type StudiedNormalStats = {
  driving: StudiedStat;
  userPC: StudiedStat;
  management: StudiedStatWithСondition;
  preventionOfAccidents: StudiedStat;
  construction: StudiedStatWithСondition;
  heavyMachinery: StudiedStatWithСondition;
  factoryMachines: StudiedStatWithСondition;
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
  paragon: ComplicatedStat;
}

export interface ComplicatedStat extends StudiedStat {
  tier1Stats: (keyof StudiedSpecialStats | keyof StudiedNormalStats)[] | null;
  tier2Stats: (keyof StudiedSpecialStats | keyof StudiedNormalStats)[] | null;
  tier3Stats: (keyof StudiedSpecialStats | keyof StudiedNormalStats)[] | null;  
}

