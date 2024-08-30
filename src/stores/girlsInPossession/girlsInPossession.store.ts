import { makeObservable, observable, action, computed } from 'mobx'
import { Girl, GirlMentalStats, GirlNormalExperience, GirlSexExperience, StatExp } from '../../entities/Girl'

const firstGirl:Girl  = {
  id: 'Hanabi',
  name: 'Ханаби',
  mood: 6,
  energy: 4,
  mentalStats: {
    shamelessness:{
      exp: {
        level: 0,
        exp: 0
      },
      name: {
        name: 'shamelessness',
        description: 'Бесстыдство'
      }
    },
    lewdness: {
      exp: {
        level: 3,
        exp: 0
      },
      name: {
        name: 'lewdness',
        description: 'Пошлость'
      }
    },
    obedience: {
      exp: {
        level: 4,
        exp: 0
      },
      name: {
        name: 'obedience',
        description: 'Послушность'
      }
    },
    masochism: {
      exp: {
        level: 5,
        exp: 0
      },
      name: {
        name: 'masochism',
        description: 'Мазохизм'
      }
    },
    affection: {
      exp: {
        level: 6,
        exp: 0
      },
      name: {
        name: 'affection',
        description: 'Привязанность'
      }
    },
    devotion: {
      exp: {
        level: 7,
        exp: 0
      },
      name: {
        name: 'devotion',
        description: 'преданность'
      }
    },
    arrogance: {
      exp: {
        level: 8,
        exp: 0
      },
      name: {
        name: 'arrogance',
        description: 'Высокомерие'
      }
    },
    ambition: {
      exp: {
        level: 9,
        exp: 0
      },
      name: {
        name: 'ambition',
        description: 'Амбиции'
      }
    },
    routine: {
      exp: {
        level: 10,
        exp: 0
      },
      name: {
        name: 'routine',
        description: 'Привычка'
      }
    }   
  },
  normalExp: {
    service: {
      exp: {
        level: 1,
        exp: 0
      },
      name: {
        name: 'maid',
        description: 'Горничная'
      }
    },
    cook: {
      exp: {
        level: 2,
        exp: 0
      },
      name: {
        name: 'cook',
        description: 'Повариха'
      }
    },
    doctor: {
      exp: {
        level: 3,
        exp: 0
      },
      name: {
        name: 'doctor',
        description: 'Медсестра'
      }
    },
    alchemist: {
      exp: {
        level: 4,
        exp: 0
      },
      name: {
        name: 'alchemist',
        description: 'Алхимик'
      }
    },
    fighting: {
      exp: {
        level: 5,
        exp: 0
      },
      name: {
        name: 'fighting',
        description: 'Боец'
      }
    },
    secretary: {
      exp: {
        level: 6,
        exp: 0
      },
      name: {
        name: 'secretary',
        description: 'Секретарь'
      }
    },
    businesswoman: {
      exp: {
        level: 7,
        exp: 0
      },
      name: {
        name: 'businesswoman',
        description: 'Ведение бизнеса'
      }
    },
    enchantress: {
      exp: {
        level: 8,
        exp: 0
      },
      name: {
        name: 'enchantress',
        description: 'Чародейка'
      }
    },
    showgirl: {
      exp: {
        level: 9,
        exp: 0
      },
      name: {
        name: 'showgirl',
        description: 'Театральное искусство'
      }
    },
    escort: {
      exp: {
        level: 10,
        exp: 0
      },
      name: {
        name: 'escort',
        description: 'Эскорт'
      }
    },
    pet: {
      exp: {
        level: 10,
        exp: 0,
      },
      name: {
        name: 'pet',
        description: 'Питомец'
      }
    },    
  },
  sexExp: {
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
    Kiss: {
      level: 3,
      exp: 0
    },
    BJ: {
      level: 1,
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
    }
  },  
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

  @action trainGirl = (block: string, key: string, value: StatExp) => {
    if (block as keyof Girl === "mentalStats") {
      //this.girls[this.currentGirl].mentalStats[key as keyof GirlMentalStats].exp = value;
    }
    if (block as keyof Girl === "normalExp") {
      //this.girls[this.currentGirl].normalExp[key as keyof GirlNormalExperience].exp = value;
    }
    if (block as keyof Girl === "sexExp") {  
      this.girls[this.currentGirl].sexExp[key as keyof GirlSexExperience] = value;
    } 
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