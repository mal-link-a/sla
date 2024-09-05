import { makeObservable, observable, action, computed } from "mobx";
import { Pages } from "./types";

class Store {
  constructor() {
    makeObservable(this);
  }

  @observable imgSrc: string = `${process.env.PUBLIC_URL}/locations/work.png`;

  @observable currentPage: Pages = Pages.lesson;

  @action setPage = (page: Pages) => {
    this.currentPage = page;
  }

  @action setImg = (imgsrc: string) => {
    if (this.imgSrc !== imgsrc)
    this.imgSrc = imgsrc;
  };

  //Модалка
  @observable modalIsOpen: boolean = false;
  @observable modalImage: string = "";
  @observable modalText: string = ""; 

  @action setModalData = (flag: boolean, imgPath?: string, text?: string) => {
    this.modalIsOpen = flag;
    if (imgPath && text) {
      this.modalImage=imgPath
      this.modalText=text
    }
  }

}

export const baseStore = new Store();
