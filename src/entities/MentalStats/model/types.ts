export enum ContributionType {
    InsufficientReward, //Недостаточное вознаграждение
    ExcessiveReward, //Достаточное вознаграждение
    SufficientReward, //Избыточное вознаграждение
    UndeservedReward,  //Недостаточное вознаграждение
    UnfairReward,  //Несправедливое - это когда требовалось наказание, а получили вознаграждение.
    InsufficientPunishment,// Недостаточное наказание
    SufficientPunishment, // Достаточное наказание
    ExcessivePunishment, // Избыточное наказание
    UndeservedPunishment, // Незаслуженное наказание
    UnfairPunishment, // Несправедливое наказание
}
export interface MentalStat { 
    name: string   
    description: string;
    minValue: number;
    maxValue: number;
}
 
export type MentalStats = {
    contribution: MentalStat, //Уровень ожидаемого поощрения или наказания. от -5 до 5.    
    obedience: MentalStat, // 0-5Пока всё просто - давай награды за хорошую работу и не косячь.
    rejection: MentalStat, // 0-5Нежелание работать. Выдать серьёзное наказание, и будет норм
    intelligence: MentalStat, // 0-5Интеллект. Если высокий, убедить работать, и будет норм
    mood: MentalStat, // 0-10 Настроение. Если плохое, то плохо учимся и плохо повинуемся. 
}


