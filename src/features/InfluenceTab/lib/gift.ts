//Выглядит как беспроигрышный вариант, даже учесть, что в одном варианте мы дарим цветы
import { contributionText } from "../../../entities/MentalStats/model/contributionText";
import { baseStore } from "../../../stores/Base/base.store";
import { slaveStore } from "../../../stores/slave/slave.store";
import { texts } from "../model/texts";

export const gift = (tier: number) => {
  const girlMental = Object.assign(
    {},
    slaveStore.slave.mental
  );
  const img = `${process.env.PUBLIC_URL}/officeSlave/happy1.png`;
  const request = texts.gift.text[tier].action + "\n";
  let response = contributionText.SufficientReward;
  girlMental.mood = girlMental.mood + 2;
  girlMental.obedience++;

  slaveStore.changeMentalStats(girlMental);
  slaveStore.spendEnergy();
  baseStore.setModalData(true, img, request + "\n" + response);
};
