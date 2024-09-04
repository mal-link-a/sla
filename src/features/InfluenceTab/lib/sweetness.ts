//Выглядит как беспроигрышный вариант, кроме тех. кто не любит сладкое.
import { contributionText } from "../../../entities/MentalStats/model/contributionText";
import { baseStore } from "../../../stores/Base/base.store";
import { slaveStore } from "../../../stores/slave/slave.store";
import { texts } from "../model/texts";

export const sweetness = (tier: number) => {
  const girlMental = Object.assign(
    {},
    slaveStore.slave.mental
  );
  const img = `${process.env.PUBLIC_URL}/officeSlave/happy2.png`;
  const request = texts.sweetness.text[tier].action + "\n";
  let response = contributionText.SufficientReward;
  girlMental.mood = girlMental.mood + 2;

  slaveStore.changeMentalStats(girlMental);
  slaveStore.spendEnergy();
  baseStore.setModalData(true, img, request + "\n" + response);
};
