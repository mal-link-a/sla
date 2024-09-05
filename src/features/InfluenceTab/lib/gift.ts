//Выглядит как беспроигрышный вариант, даже учесть, что в одном варианте мы дарим цветы
import { contributionText } from "../../../entities/MentalStats/model/contributionText";
import { baseStore, slaveStore } from "../../../stores";
import { texts } from "../model/texts";

export const gift = (tier: number) => {
  const girlMental = Object.assign(
    {},
    slaveStore.slave.mental
  );
  let img = `${process.env.PUBLIC_URL}/other/stationery.jpg`;
  if (tier === 1)
  img = `${process.env.PUBLIC_URL}/other/flowers.jpg`;
  girlMental.contribution= 0;
 
  const request = texts.gift.text[tier].action + "\n";
  let response = contributionText.SufficientReward;
  girlMental.mood = girlMental.mood + 2;
  girlMental.obedience++;

  slaveStore.changeMentalStats(girlMental);
  slaveStore.spendEnergy();
  baseStore.setModalData(true, img, request + "\n" + response);
};
