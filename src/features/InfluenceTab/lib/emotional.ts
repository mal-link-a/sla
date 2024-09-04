//Понятия не имею, но пока выглядит как сброс бомбы на голову работника
import { contributionText } from "../../../entities/MentalStats/model/contributionText";
import { baseStore } from "../../../stores/Base/base.store";
import { slaveStore } from "../../../stores/slave/slave.store";
import { texts } from "../model/texts";

export const emotional = (tier: number) => {
  const girlMental = Object.assign(
    {},
    slaveStore.slave.mental
  );
  const img = `${process.env.PUBLIC_URL}/officeSlave/happy2.png`;
  const request = texts.emotional.text[tier].action + "\n";
  let response = contributionText.SufficientReward;

  girlMental.mood++;
  girlMental.obedience++;
  slaveStore.changeMentalStats(girlMental);
  slaveStore.spendEnergy();
  baseStore.setModalData(true, img, request + "\n" + response);
};
