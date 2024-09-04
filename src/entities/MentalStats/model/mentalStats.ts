import { MentalStats } from "./types";

export const mentalStats: MentalStats = {
  contribution: {
    name: "contribution level",
    description: "Данный параметр показывает, насколько тяжелого наказания или хорошего поощрения заслуживает ваш работник.",
    minValue: -5,
    maxValue: 5
  }, 
  obedience: {
    name: "Послушность",
    description: "Параметр, высокое значение которого вы определённо хахдете от других.",
    minValue: 0,
    maxValue: 10,
  },
  rejection: {
    name: "Мятежность",
    description: "Параметр, заставляющий сотрудника противиться вашей власти. Накажите его хорошенько, и всё пройдёт. Тут нет механики полного уничтожения мотивации или что-то вроде.",
    minValue: 0,
    maxValue: 10
  },
  intelligence: {
    name: "Интеллект",
    description: "Параметр, который увеличивает скорость обучения работника новому. И вместе с тем работник больше подвержен логическим аргументам",
    minValue: 0,
    maxValue: 5
  },
  mood: {
    name: "Настроение",
    description: "Настроение влияет на всё.",
    minValue: 0,
    maxValue: 8
  },
};
