//Лишаем привилегий человека
//
import { slaveImg } from "../../../entities/Girl/model/imgPath";
import { contributionText } from "../../../entities/MentalStats/model/contributionText";
import { baseStore, slaveStore } from "../../../stores";
import { texts } from "../model/texts";

export const revocationOfPrivileges = (tier: number) => {
  const girlMental = Object.assign(
    {},
    slaveStore.slave.mental
  );
  const img = `${process.env.PUBLIC_URL}/girls/${slaveStore.slave.id}/${slaveImg.sad1}`;
  const request = texts.revocationOfPrivileges.text[tier].action + "\n";
  let response = contributionText.SufficientPunishment;
  girlMental.mood = girlMental.mood + 2;
  girlMental.obedience++;

  girlMental.mood--;
  girlMental.rejection--;
  girlMental.contribution= 0;

  slaveStore.changeMentalStats(girlMental);
  slaveStore.spendEnergy();
  baseStore.setModalData(true, img, request + "\n" + response);
};
