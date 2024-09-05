import { StatCondition } from "../../StudiedStats"; //Перенести из studies в отдельную папку?

export interface WorkPlace {
    name: string,
    text: string,
    salary: number;    
}
export interface WorkPlaceWithConditions extends WorkPlace {    
    conditions: StatCondition[];
}

export interface WorkPlaces {
    laborerWork: WorkPlace,
    programmerWork: WorkPlaceWithConditions,
    secretaryWork: WorkPlaceWithConditions,
    accountantWork: WorkPlaceWithConditions,
    plantManagerWork: WorkPlaceWithConditions,
    driverWork: WorkPlaceWithConditions,
    doctorWork: WorkPlaceWithConditions,
    constructorWork: WorkPlaceWithConditions,
    factoryWorkerWork: WorkPlaceWithConditions,
    sysAdminWork: WorkPlaceWithConditions,
}