import { MentalStats } from "../../MentalStats/model/types";
import { StudiedNormalStats, StudiedSpecialStats } from "../../StudiedStats/model/types";

export interface Girl {
  id: string;
  name: string;
  energy: number;
  mental: GirlMental;
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
export type GirlExperience = Record<keyof StudiedSpecialStats | keyof StudiedNormalStats, StatExp>;

//Пути к изображениям сущности
export type GirlBaseImg = {
  avatar: string;
  normal: string;
};
export type GirlImg = GirlBaseImg & Record<keyof StudiedSpecialStats | keyof StudiedNormalStats, string>;

export const GirlImgPath: GirlImg = {
  avatar: "_avatar.png",
  normal: "_normal.png",
  singing: "",
  dance: "",
  systemAdministration: "",
  programming: "",
  coffeeBrewing: "",
  doctoring: "",
  firstAid: "",
  surgery: "",
  driving: "",
  userPC: "",
  management: "",
  preventionOfAccidents: "",
  construction: "",
  heavyMachinery: "",
  factoryMachines: "",
  technicalProcess: "",

};

//Менталка
export type GirlMental = Record<keyof MentalStats, number> 
