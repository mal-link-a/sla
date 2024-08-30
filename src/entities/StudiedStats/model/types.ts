

export interface StudiedStat {
  name: string;
  description: string;
  lessonText: string[];
  type: StatType;
  tier: number;
}
//Статы с требованиями
export interface StudiedStatWithСondition extends StudiedStat {
  conditions: StatCondition[];
}
export type StatCondition = [
  keyof StudiedSexStats |  keyof StudiedNormalStats,
  number
];


//Типизация типов статов
export enum StatType {
  normal, sexual
}

export type StudiedSexStats = {
  HJ: StudiedStat; //работа руками
  FJ: StudiedStat; //Работа ногами
  TitFuck: StudiedStat; //Пайзури
  Kiss: StudiedStat; //Поцелуи
  BJ: StudiedStat; //Минет
  Rimming: StudiedStat; //Римминг
  VaginalSex: StudiedStat; //
  AnalSex: StudiedStat; //
  Mazo: StudiedStat; //Мазохизм
  Pissing: StudiedStat; //Писсинг
  Exhibitionism: StudiedStat; //Публичность
  Masturbation: StudiedStat; //
  Dildo: StudiedStat; //
  Irrumation: StudiedStatWithСondition; // 
}
export type StudiedNormalStats = {
  Service: StudiedStat; 
  Doctor: StudiedStat; 
  Cook: StudiedStat; 
  Secretary: StudiedStat; 
  Dance: StudiedStat; 
  Fighting: StudiedStat; //
  Rhetoric: StudiedStat; //
  Catgirl: StudiedStat; 
  Alchemy: StudiedStat; 
  Magic: StudiedStat; 
  Music: StudiedStat;
}
export type StudiedStats = StudiedNormalStats | StudiedSexStats;
//Комплексные типы
export interface ComplicatedStats {
  normalSex: ComplicatedStat, 
  paranormalSex: ComplicatedStat, 
}

export interface ComplicatedStat extends StudiedStat {
  tier1Stats: (keyof StudiedSexStats | keyof StudiedNormalStats)[] | null;
  tier2Stats: (keyof StudiedSexStats | keyof StudiedNormalStats)[] | null;
  tier3Stats: (keyof StudiedSexStats | keyof StudiedNormalStats)[] | null;
}
