export interface StudiedStat {
    name: string;
    description: string; 
    lessonText: string[];
}
export interface StudiedStatWithСondition extends StudiedStat {
    conditions: StatCondition[];
}
export type StatCondition = [keyof StudiedSexStats | keyof StudiedNormalStats, number]

export interface StudiedSexStats {
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
    Irrumation : StudiedStatWithСondition//
  }

  export interface StudiedNormalStats {
    Service: StudiedStat; //работа руками
    Doctor: StudiedStat; //Работа ногами
    Cook: StudiedStat; //Пайзури
    Kiss: StudiedStat; //Поцелуи
    Secretary: StudiedStat; //Минет
    Dance: StudiedStat; //Римминг
    Fighting: StudiedStat; //
    Rhetoric: StudiedStat; //
    Catgirl: StudiedStat; //Мазохизм
    Alchemy: StudiedStat; //Писсинг
    Magic: StudiedStat; //Публичность
    Music: StudiedStat; //    
  }


  //Статы, которые заключают в себе некоторую группу других статов; Их знание = среднему значению статов
export interface ComplicatedSexStat {
    name: string;
    description: string;
    tier1Stats: (keyof StudiedSexStats | keyof StudiedNormalStats)[] | null; 
    tier2Stats: (keyof StudiedSexStats | keyof StudiedNormalStats)[] | null; 
    tier3Stats: (keyof StudiedSexStats | keyof StudiedNormalStats)[] | null;    
  }