//Лишаем привилегий человека чуть иначе
//
import { slaveImg } from "../../../entities/Girl/model/imgPath";
import { contributionText } from "../../../entities/MentalStats/model/contributionText";
import { baseStore, slaveStore } from "../../../stores";
import { texts } from "../model/texts";

export const strictRules = (tier: number) => {
  const girlMental = Object.assign(
    {},
    slaveStore.slave.mental
  );
  const img = `${process.env.PUBLIC_URL}/girls/${slaveStore.slave.id}/${slaveImg.sad2}`;
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

  girlMental.contribution= 0;
  slaveStore.changeMentalStats(girlMental);
  slaveStore.spendEnergy();
  baseStore.setModalData(true, img, request + "\n" + response);
};
