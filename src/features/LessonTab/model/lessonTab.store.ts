import { makeObservable, observable, action } from 'mobx'
import { ShowMode, Teacher } from './types';

class Store {
    constructor() {
      makeObservable(this)
    }
  
    @observable infoMode: boolean = false;
    @observable teacher: Teacher = Teacher.Me;
    @observable showMode: ShowMode = ShowMode.single;

    @observable modalIsOpen: boolean = false;
    @observable modalImg: string   = "normal";
    @observable modalText: string   = "text";
    @action setModalIsOpen = (isOpen: boolean, imgscr?: string,  text?: string) => {
      this.modalIsOpen = isOpen;
      if (imgscr && text)
      {
         this.modalImg = imgscr;
         this.modalText = text;
      }
    }

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