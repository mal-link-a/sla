export interface statPanelProp {
    blockName: string;
    stats: statParamProp[]
}

export interface statParamProp {
    keyName: string,
    name: string,
    description: string,
    level: number,
    exp: number
}

export enum Teacher {Me = "Я", Assistant = "Ассистент", Coach = "Вызвать тренера"};
export enum ShowMode {groups = "Группы", singles = "Одиночные", tree = "Дерево"};
