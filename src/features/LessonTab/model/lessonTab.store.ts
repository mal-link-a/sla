import { makeObservable, observable, action } from 'mobx'
import { ShowMode, Teacher } from './types';

class Store {
    constructor() {
      makeObservable(this)
    }
  
    @observable infoMode: boolean = false;
    @observable teacher: Teacher = Teacher.Me;
    @observable showMode: ShowMode = ShowMode.single;

    @action switchInfoMod = () => {
      this.infoMode = !this.infoMode
    }
    @action setTeacher = (value:Teacher) => {
      this.teacher = value;
    }
    @action setShowMode = (value:ShowMode) => {
      this.showMode = value;
    }
  }
  
  export const lessonTabStore = new Store()