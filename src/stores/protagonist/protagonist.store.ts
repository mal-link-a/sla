import { makeObservable, observable, action, computed } from "mobx";

class Store {
  constructor() {
    makeObservable(this);
  }

  @observable money: number = 10000;

  @action earnMoney = (value: number) => {
    this.money = this.money + value;
  };

  @action spendMoney = (value: number) => {
    this.money = this.money - value;
  };
}

export const protagonistStore = new Store();
