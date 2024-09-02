import { StudiedNormalStats, StudiedSexStats } from "../../StudiedStats/model/types";

export interface Girl {
  id: string;
  name: string;
  mood: number;
  energy: number;
  mental: GirlMentalsSimple;
  exp: GirlExperience;
}
export enum GirlBlocksEnum {
  "mentalStats",
  "normalExp",
  "sexExp",
}
export type StatExp = {
  level: number;
  exp: number;
};

//Опыт
export type GirlExperience = Record<keyof StudiedSexStats | keyof StudiedNormalStats, StatExp>;

//Пути к изображениям сущности
export type GirlBaseImg = {
  avatar: string;
  normal: string;
};
export type GirlImg = GirlBaseImg & Record<keyof StudiedSexStats | keyof StudiedNormalStats, string>;

export const GirlImgPath: GirlImg = {
  avatar: "_avatar.png",
  normal: "_normal.png",
  HJ: "l_petting.png",
  FJ: "l_petting.png",
  TitFuck: "l_petting.png",
  Kiss: "l_lesbian.png",
  BJ: "l_petting.png",
  Rimming: "l_petting.png",
  VaginalSex: "l_vaginal.png",
  AnalSex: "l_anal.png",
  Mazo: "l_anal.png", //
  Pissing: "l_anal.png", //
  Exhibitionism: "l_anal.png", //
  Masturbation: "l_anal.png", //
  Dildo: "l_anal.png",
  Irrumation: "l_petting.png",
  Service: "",
  Cook: "",
  Doctor: "",
  Secretary: "",
  Dance: "",
  Fighting: "",
  Rhetoric: "",
  Catgirl: "",
  Alchemy: "",
  Magic: "",
  Music: "",
};

//Менталка сущности
export type MentalSimple = {
  name: string,
  value: number,
}

export interface GirlMentalsSimple {  
  lewd: MentalSimple, //похоть?
  stickAttitude: MentalSimple, //Отношение к наказаниям 0-Вера в неприкасаемость 5 вера в несправедливые наказания
  carrotAttitude: MentalSimple, //Отношение к поощрениям 0-Вера в отсутствие поощрений 5 вера в несправедливые поощрения
  taming: MentalSimple, //Укрощение. Пока считаем как порог, за пределами которого сущность портится кнутом или пряником

  habituality: MentalSimple, //Привычка - время
  arrogance: MentalSimple, //Гордость-без гордости
  fearlessness: MentalSimple, //Бесстрашие-трусость = модификатор воздействия наказаний
  intelligence: MentalSimple, //Интеллект
  obedience: MentalSimple,
}
//Темперамент отдельно