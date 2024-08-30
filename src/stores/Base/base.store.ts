import { makeObservable, observable, action, computed } from "mobx";
import { Pages } from "./model/types";
import { bgPaths } from "./model/bgPaths";

class Store {
  constructor() {
    makeObservable(this);
  }

  @observable imgSrc: string = bgPaths.customerOrders;

  @observable currentPage: Pages = Pages.lesson;

  @action setPage = (page: Pages) => {
    this.currentPage = page;
  }

  @action setImg = (imgsrc: string) => {
    this.imgSrc = imgsrc;
  };
}

export const baseStore = new Store();
