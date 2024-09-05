//Выглядит как беспроигрышный вариант, кроме тех. кто не любит сладкое.
import { contributionText } from "../../../entities/MentalStats/model/contributionText";
import { baseStore } from "../../../stores";
import { slaveStore } from "../../../stores/slave/slave.store";
import { texts } from "../model/texts";

export const sweetness = (tier: number) => {
  const girlMental = Object.assign(
    {},
    slaveStore.slave.mental
  );
  let img = `${process.env.PUBLIC_URL}/other/choco.jpg`;
  if (tier===2)
    img = `${process.env.PUBLIC_URL}/other/cake.jpg`;
  if (tier===1)
    img = `${process.env.PUBLIC_URL}/other/iceCream.jpg`;
  const request = texts.sweetness.text[tier].action + "\n";
  let response = contributionText.SufficientReward;
  girlMental.mood = girlMental.mood + 2;
  girlMental.contribution= 0;

  slaveStore.changeMentalStats(girlMental);
  slaveStore.spendEnergy();
  baseStore.setModalData(true, img, request + "\n" + response);
};
