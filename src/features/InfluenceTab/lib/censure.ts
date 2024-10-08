import { slaveImg } from "../../../entities/Girl/model/imgPath";
import { contributionText } from "../../../entities/MentalStats/model/contributionText";
import { ContributionType } from "../../../entities/MentalStats/model/types";
import { baseStore } from "../../../stores/Base/model/base.store";
import { slaveStore } from "../../../stores/slave/model/slave.store";
import { texts } from "../model/texts";
import { checkContribution } from "./universal/checkContribution";
import { influenceTime } from "./universal/influenceTime";

//Играем в словесные оскорбления
export const censure = (tier: number) => {
  const girlMental = Object.assign(
    {},
    slaveStore.slave.mental
  );
  const img = `${process.env.PUBLIC_URL}/girls/${slaveStore.slave.id}/${slaveImg.sad1}`;
  const request = texts.censure.text[tier].action;
  let response = contributionText.ExcessivePunishment;

  const [days, dayzLO] = [
    influenceTime.censureDays,
    influenceTime.censureLOdayz,
  ];
  influenceTime.censureDays++;

  let result;
  if (days <= dayzLO) {
    result = checkContribution((-tier - 1) * 2);
  } else {
    const [flat, multiplier, minValue] = [
      influenceTime.censureLOflat,
      influenceTime.censureLOmultiplier,
      influenceTime.censureMinEff,
    ];
    result = checkContribution(
      Math.min(-tier - 1 + flat + (days - dayzLO) * multiplier, minValue)
    );
  }

  switch (result) {
    case ContributionType.InsufficientPunishment: {
      response = contributionText.InsufficientPunishment;
      girlMental.contribution= -1;
      break;
    }
    case ContributionType.ExcessivePunishment: {
      response = contributionText.ExcessivePunishment;
      girlMental.contribution= 0;
      break;
    }
    case ContributionType.SufficientPunishment: {
      response = contributionText.ExcessivePunishment;
      girlMental.contribution= 0;
      if (girlMental.mood < 6) {
        girlMental.mood--;
      }
      break;
    }
    case ContributionType.UnfairPunishment: {
      response = contributionText.UnfairPunishment;
      --girlMental.mood;
      ++girlMental.rejection;
      girlMental.contribution= 3;
      break;
    }
    case ContributionType.UndeservedPunishment: {
      response = contributionText.UndeservedPunishment;
      girlMental.mood--;
      girlMental.rejection++;
      girlMental.contribution= 5;
      break;
    }
  }
  slaveStore.changeMentalStats(girlMental);
  baseStore.setModalData(true, img, request + "\n" + response);
  slaveStore.spendEnergy();
};
