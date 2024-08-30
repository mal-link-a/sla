import { StudiedNormalStats, StudiedSexStats } from "../../StudiedStats/model/types";

export interface Girl {
  id: string;
  name: string;
  mood: number;
  energy: number;
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