export interface StudiedStat {
    name: string;
    description: string; 
    lessonText: string[];
}
export interface StudiedStatWithСondition extends StudiedStat {
   
}
export type StatCondition = [keyof StudiedSexStats, string ]

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
  }

  export interface StudiedNormalStats {
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
  }


  //Статы, которые заключают в себе некоторую группу других статов; Их знание = среднему значению статов
export interface ComplicatedSexStat {
    name: string;
    description: string;
    tier1Stats: keyof StudiedSexStats;    
  }