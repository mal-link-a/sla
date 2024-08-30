import { makeObservable, observable, action } from 'mobx'
import { LessonTeacher } from './types';

class Store {
    constructor() {
      makeObservable(this)
    }
  
    @observable infoMode: boolean = false;
    @observable teacher: LessonTeacher = LessonTeacher.Me;

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
    @action setTeacher = (value:LessonTeacher) => {
      this.teacher = value;
    }
  }
  
  export const lessonTabStore = new Store()