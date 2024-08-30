import { makeObservable, observable, action, computed } from "mobx";

class Store {
  constructor() {
    makeObservable(this);
  }

  @observable money: number = 10000;

  @observable energy: number = 5;
  @observable maxEnergy: number = 5;

  @action spendEnergy = () => {
    --this.energy;
  };
  @action restoreEnergy = () => {
    this.energy = this.maxEnergy;
  };

  @action earnMoney = (value: number) => {
    this.money = this.money + value;
  };

  @action spendMoney = (value: number) => {
    this.money = this.money - value;
  };
}

export const protagonistStore = new Store();
