export enum InfluenceEnum {
    positive="Поощрения",
    negative="Наказания",

}
export interface influenceText {
    name: string;
    action: string;
}
    
export interface influenceType {
    text: influenceText[],
    type: InfluenceEnum,
    name: string,
    callBack: (val: number) => void;
}
export type influenceSection = influenceType[];

export type influenceTypes = influencePositiveTypes & influenceNegativeTypes

export interface influencePositiveTypes {
    compliment: influenceType,
    timeTogether: influenceType,
    freeTime: influenceType,
    emotional: influenceType,
    gift: influenceType,
    sweetness: influenceType,
}
export interface influenceNegativeTypes {
    censure: influenceType,
    revocationOfPrivileges: influenceType,
    strictRules: influenceType,
    embarrassment: influenceType,
    flagellation: influenceType,
    extreme: influenceType,
}

   