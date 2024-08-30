import { StudiedSexStats } from "../../StudiedStats/model/types";


export interface Girl {
    id: string;
    name: string;
    mood: number;
    energy: number;
    mentalStats: GirlMentalStats;
    normalExp: GirlNormalExperience;
    sexExp: GirlSexExperience;
} 
export enum GirlBlocksEnum {
    "mentalStats", "normalExp", "sexExp"
}
export type StatExp = {
    level: number,
    exp: number,
};
export interface GirlMentalStats { 
    shamelessness: Stat; //бесстыдство 
    lewdness: Stat; //пошлость - продвинутый стат бесстыдства
    obedience: Stat; // Покорность
    masochism: Stat; // Мазохизм - продвинутый стат покорности
    affection: Stat;  // Влюблённость -
    devotion: Stat; //преданность
    arrogance: Stat; //Высокомерие - мешает тренировать
    ambition: Stat; //Амбиционность - мешает тренировать, шанс предательства
    routine: Stat; //Уровень привычности в качестве новой роли
}



//Секс-опыт
export type GirlSexExperience = Record<keyof StudiedSexStats, StatExp>


//Пути к изображениям сущности
export type  GirlBaseImg = {
    avatar: string;
    normal: string;
};
export type GirlSexExpImg = Record<keyof StudiedSexStats, string>;
export type GirlNormalExpImg = Record<keyof GirlNormalExperience, string>;
export type GirlImg = GirlBaseImg & GirlSexExpImg & GirlNormalExpImg;

export const GirlImgPath: GirlImg= {
    avatar: "_avatar.png",
    normal: "_normal.png",
    HJ: 'l_petting.png',
    FJ: 'l_petting.png',
    TitFuck: 'l_petting.png',
    Kiss: 'l_lesbian.png',
    BJ: 'l_petting.png',
    Rimming: 'l_petting.png',
    VaginalSex: 'l_vaginal.png',
    AnalSex: 'l_anal.png',
    Mazo: 'l_anal.png', // 
    Pissing: 'l_anal.png', // 
    Exhibitionism: 'l_anal.png', // 
    Masturbation: 'l_anal.png', // 
    Dildo: 'l_anal.png',
    Irrumation: 'l_petting.png',
    service: '',
    cook: '',
    doctor: '',
    alchemist: '',
    fighting: '',
    secretary: '',
    businesswoman: '',
    enchantress: '',
    showgirl: '',
    escort: '',
    pet: ''
}

//устаревшее, удлалить при переписывании нормал скиллов
export type Stat = {
    exp: StatExp;
    name: StatName;
}
export type StatName = {
    name: string;
    description: string;    
}
export interface GirlNormalExperience {
    service: Stat; //Служение
    cook: Stat; //кухарка
    doctor: Stat; //опасность
    alchemist: Stat; 
    fighting: Stat; //опасность
    secretary: Stat; //Ведение отчетности
    businesswoman: Stat; //Ведение бизнеса
    enchantress: Stat; //Волшебница - опасность
    showgirl: Stat; //актерское мастерство, пение, танцы, игра на инструментах?
    escort: Stat; //Манеры, опрятность, психология, осанка   
    pet: Stat; //Питомец
}
