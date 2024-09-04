//Совершенно ненормальные методы воздействия
//Которые, наверное, не должны работать
import { contributionText } from "../../../entities/MentalStats/model/contributionText";
import { baseStore } from "../../../stores/Base/base.store";
import { slaveStore } from "../../../stores/slave/slave.store";
import { texts } from "../model/texts";

export const extreme = (tier: number) => {
  const girlMental = Object.assign(
    {},
    slaveStore.slave.mental
  );
  const img = `${process.env.PUBLIC_URL}/officeSlave/cry2.png`;
  const request = texts.extreme.text[tier].action + "\n";
  let response = contributionText.ExcessivePunishment;

  switch (tier) {
    case 0: {
      girlMental.obedience = Math.min(6, girlMental.obedience + 1);
      girlMental.mood++;
      break;
    }
    case 1: {
      girlMental.mood = Math.min(0, girlMental.mood - 2);
      girlMental.rejection = girlMental.rejection - 2;
      break;
    }
    case 2: {
      girlMental.obedience = 8;
      girlMental.mood = 2;
      girlMental.rejection = 0;
      break;
    }
  }
  slaveStore.changeMentalStats(girlMental);
  slaveStore.spendEnergy();
  baseStore.setModalData(true, img, request + "\n" + response);
};
