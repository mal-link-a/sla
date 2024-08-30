import { Stat } from "../../../entities/Girl";

export interface statPanelProp {
    blockName: string;
    stats: statParamProp[]
}

export interface statParamProp {
    key: string,
    name: string,
    description: string,
    level: number,
    exp: number
}

export enum LessonTeacher {Me = "Я", Assistant = "Ассистент", Coach = "Вызвать тренера"};

