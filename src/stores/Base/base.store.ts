import { makeObservable, observable, action, computed } from "mobx";
import { Pages } from "./model/types";

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
}

export const baseStore = new Store();
