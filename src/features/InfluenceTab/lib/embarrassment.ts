//Наказание стыдом. ИРЛ, наверное, пустило бы все надежды нормально работать в компании под откос
//
import { slaveImg } from "../../../entities/Girl/model/imgPath";
import { contributionText } from "../../../entities/MentalStats/model/contributionText";
import { ContributionType } from "../../../entities/MentalStats/model/types";
import { baseStore } from "../../../stores/Base/model/base.store";
import { slaveStore } from "../../../stores/slave/slave.store";
import { texts } from "../model/texts";
import { checkContribution } from "./universal/checkContribution";

export const embarrassment = (tier: number) => {
  const girlMental = Object.assign(
    {},
    slaveStore.slave.mental
  );
  const img = `${process.env.PUBLIC_URL}/girls/${slaveStore.slave.id}/${slaveImg.sad1}`;
  const request = texts.embarrassment.text[tier].action + "\n";
  let response = contributionText.SufficientPunishment;

  const result = checkContribution(-4);
  girlMental.contribution= 0;

  switch (result) {
    case ContributionType.UnfairPunishment: {
      response = contributionText.UnfairPunishment;
      girlMental.mood = girlMental.mood - 3;
      
      break;
    }
    case ContributionType.UndeservedPunishment: {
      response = contributionText.UndeservedPunishment;
      girlMental.mood = girlMental.mood - 3;
      break;
    }
    default: {
      girlMental.mood--;
      break;
    }
  }
  girlMental.rejection--;
  slaveStore.changeMentalStats(girlMental);
  slaveStore.spendEnergy();
  baseStore.setModalData(true, img, request + "\n" + response);
};
