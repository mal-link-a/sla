//Лишаем привилегий человека чуть иначе
//
import { contributionText } from "../../../entities/MentalStats/model/contributionText";
import { baseStore } from "../../../stores/Base/base.store";
import { slaveStore } from "../../../stores/slave/slave.store";
import { texts } from "../model/texts";

export const strictRules = (tier: number) => {
  const girlMental = Object.assign(
    {},
    slaveStore.slave.mental
  );
  const img = `${process.env.PUBLIC_URL}/officeSlave/cry1.png`;
  const request = texts.strictRules.text[tier].action + "\n";
  let response = contributionText.SufficientPunishment;
  girlMental.mood = girlMental.mood + 2;
  girlMental.obedience++;

  girlMental.mood--;
  girlMental.rejection--;
  if (tier === 2) {
    girlMental.mood--;
    girlMental.rejection = girlMental.rejection - 2;
  }

  slaveStore.changeMentalStats(girlMental);
  slaveStore.spendEnergy();
  baseStore.setModalData(true, img, request + "\n" + response);
};
