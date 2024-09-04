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
  reject: string
};
export type GirlRewardImg = {
  happy1: string;
  happy2: string;
  happy3: string
};
export type GirlPunishmentImg = {
  sad1: string;
  sad2: string;
  sad3: string
};
export type SlaveImg = GirlBaseImg & GirlRewardImg & GirlPunishmentImg & Record<keyof StudiedSpecialStats | keyof StudiedNormalStats, string>;

//Менталка
export type GirlMental = Record<keyof MentalStats, number> 
