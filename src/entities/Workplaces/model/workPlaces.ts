import { WorkPlaces } from "./types";

export const workPlaces: WorkPlaces = {
    laborerWork: {
        name: "Чернорабочий",
        text: "Работник отправляется ворочать мешки, разгружать вагоны, подавать и приносить.",
        salary: 100,
    },
    programmerWork: {
        name: "Программист",
        text: "Работник отправляется в одну из кманд разработчиков таскать jsonы, красить кнопки, рисовать моки и писать платёжные системы.",
        salary: 234567,
        conditions: [["programming", 4]]
    },
    secretaryWork: {
        name: "Секретарь",
        text: "Работник отправляется работать секретарём... делать секретарьские дела........",
        salary: 400,
        conditions: [["secretary", 3]]
    },
    accountantWork: {
        name: "Бухгалтер",
        text: "Работник отправляется в увлекательное путешествие по миру отчётов и электронных таблиц.",
        salary: 250,
        conditions: [["userPC",2], ["management", 2]]
    },
    plantManagerWork: {
        name: "Начальник завода",
        text: "Работник берёт на себя управление заводом.",
        salary: 1500000,
        conditions: [["boss",4]]
    },
    driverWork: {
        name: "Водитель",
        text: "Работник тратит время, чтобы развозить по территории нескольких крутых начальников.",
        salary: 300,
        conditions: [["driving",3]]
    },
    doctorWork: {
        name: "Врач",
        text: "Работник идёт в местный медпункт и тщательно оказывает необходимую помощь местным пострадавшим жителям.",
        salary: 90,
        conditions: [["surgery",3]]
    },
    factoryWorkerWork: {
        name: "Работник завода",
        text: "Работник идёт вкалывать за станком на завод.",
        salary: 300,
        conditions: [["factoryman",3]]
    },
    sysAdminWork: {
        name: "Системный инженер",
        text: "Работник радостно бежит чинить компьютеры и устанавливать программы пользователям завода.",
        salary: 250,
        conditions: [["systemAdministration",3]]
    },
    constructorWork: {
        name: "Строитель",
        text: "Работник помогает в возведении новых промышленных объектов.",
        salary: 500,
        conditions: [["constructor",3]]
    }
}