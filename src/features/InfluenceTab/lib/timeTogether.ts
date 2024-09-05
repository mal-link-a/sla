//Играем во время вместе. По идее должно работать, если работник нас не боится,
//Будет повышать привязанность или как я её там назвал
import { slaveImg } from "../../../entities/Girl/model/imgPath";
import { contributionText } from "../../../entities/MentalStats/model/contributionText";
import { ContributionType } from "../../../entities/MentalStats/model/types";
import { baseStore, slaveStore } from "../../../stores";
import { texts } from "../model/texts";
import { checkContribution } from "./universal/checkContribution";

export const timeTogether = (tier: number) => {
  const girlMental = Object.assign({}, slaveStore.slave.mental);
  let img =
    tier !== 1
      ? `${process.env.PUBLIC_URL}/girls/${slaveStore.slave.id}/${slaveImg.happy1}`
      : `${process.env.PUBLIC_URL}/girls/${slaveStore.slave.id}/${slaveImg.coffeeBrewing}`;
  const request = texts.timeTogether.text[tier].action + "\n";
  let response = contributionText.ExcessiveReward;

  if (tier === 3 && girlMental.obedience > 3) {
    girlMental.mood = 8;
  } else if (tier === 2 && girlMental.obedience > 3) {
    girlMental.mood = girlMental.mood + 2;
  } else {
    girlMental.mood = girlMental.mood++;
  }

  const result = checkContribution(tier + 3);
  girlMental.contribution= 0;

  switch (result) {
    case ContributionType.InsufficientReward: {
      break;
    }
    case ContributionType.ExcessiveReward: {
      girlMental.mood = girlMental.mood++;
      break;
    }
    case ContributionType.SufficientReward: {
      response = contributionText.SufficientReward;
      girlMental.mood = girlMental.mood + 2;
      break;
    }
    case ContributionType.UnfairReward: {
      response = contributionText.SufficientReward;
      break;
    }
    case ContributionType.UndeservedReward: {
      response = contributionText.SufficientReward;
      break;
    }
  }
  slaveStore.changeMentalStats(girlMental);
  slaveStore.spendEnergy();
  baseStore.setModalData(true, img, request + "\n" + response);
};
