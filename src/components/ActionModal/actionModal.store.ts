import { makeObservable, observable, action, computed } from "mobx";

class Store {
  constructor() {
    makeObservable(this);
  }

  @observable fontSize: number = 16;

  @action fontPlus = () => {   
      this.fontSize = this.fontSize  + 1;
  };
  @action fontMinus = () => {
    if (this.fontSize >7)
    this.fontSize = this.fontSize-  1;
  };

}

export const actionModalStore = new Store();
