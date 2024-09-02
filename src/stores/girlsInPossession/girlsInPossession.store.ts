import { makeObservable, observable, action, computed } from 'mobx'
import { Girl,  GirlExperience,  StatExp } from '../../entities/Girl'

const firstGirl:Girl  = {
  id: 'Hanabi',
  name: 'Ханаби',
  mood: 6,
  energy: 4,
  exp: {
    HJ: {
      level: 0,
      exp: 0
    },
    FJ: {
      level: 1,
      exp: 0
    },
    TitFuck: {
      level: 2,
      exp: 0
    },

    BJ: {
      level: 4,
      exp: 0
    },
    Rimming: {
      level: 5,
      exp: 0
    },
    VaginalSex: {
      level: 4,
      exp: 0
    },
    AnalSex: {
      level: 3,
      exp: 0
    },
    Mazo: {
      level: 2,
      exp: 0
    },
    Pissing: {
      level: 1,
      exp: 0
    },
    Exhibitionism: {
      level: 0,
      exp: 0
    },
    Masturbation: {
      level: 1,
      exp: 0
    },
    Dildo: {
      level: 2,
      exp: 0
    },
    Irrumation: {
      level: 0,
      exp: 0
    },
    Service: {
      level: 1,
      exp: 0
    },
    Doctor: {
      level: 2,
      exp: 0
    },
    Cook: {
      level: 3,
      exp: 0
    },
    Secretary: {
      level: 1,
      exp: 0
    },
    Dance: {
      level: 2,
      exp: 0
    },
    Fighting: {
      level: 3,
      exp: 0
    },
    Rhetoric: {
      level: 4,
      exp: 0
    },
    Catgirl: {
      level: 1,
      exp: 0
    },
    Alchemy: {
      level: 2,
      exp: 0
    },
    Magic: {
      level: 3,
      exp: 0
    },
    Music: {
      level: 4,
      exp: 0
    },
    Kiss: {
      level: 0,
      exp: 0
    }
  },
  mental: {
    lewd: {
      name: 'Пошлость',
      value: 0
    },
    stickAttitude: {
      name: 'Кнут',
      value: 0
    },
    carrotAttitude: {
      name: 'Пряник',
      value: 0
    },
    taming: {
      name: 'Укрощение',
      value: 0
    },
    habituality: {
      name: 'Время',
      value: 0
    },
    arrogance: {
      name: 'Гордость',
      value: 3
    },
    fearlessness: {
      name: 'Бесстрашие',
      value: 3
    },
    intelligence: {
      name: 'Интеллект',
      value: 4
    },
    obedience: {
      name: 'Послушность',
      value: 0
    }
  }
}

class Store {
  constructor() {
    makeObservable(this)
  }

  @observable girls: Girl[] = [firstGirl];

  @observable currentGirl: number = 0;

  @action newGirl = (value: Girl) => {
    this.girls.push(value)
  }

  @action trainGirl = (key: string, value: StatExp) => {       
    
      this.girls[this.currentGirl].exp[key as keyof GirlExperience] = value;
   
    --this.girls[this.currentGirl].energy;
  }

  @action spendEnergy = () => {    
    --this.girls[this.currentGirl].energy;
  }

  @computed get selectedGirl() {
    return this.girls[this.currentGirl];
  }
}

export const girlsInPossessionStore = new Store();