//Играем в комплименты. Комплименты - это то, что работает какое-то время, но,
//если кормить завтраками на постоянной основе, то они перестанут работать
import { contributionText } from "../../../entities/MentalStats/model/contributionText";
import { ContributionType } from "../../../entities/MentalStats/model/types";
import { baseStore } from "../../../stores/Base/base.store";
import { slaveStore } from "../../../stores/slave/slave.store";
import { texts } from "../model/texts";
import { influenceTime } from "./universal/influenceTime";
import { checkContribution } from "./universal/checkContribution";
import { slaveImg } from "../../../entities/Girl/model/imgPath";

export const compliment = (tier: number) => {
  const girlMental = Object.assign(
    {},
    slaveStore.slave.mental
  );
  const img = `${process.env.PUBLIC_URL}/girls/${slaveStore.slave.id}/${slaveImg.happy1}`;
  const request = texts.compliment.text[tier].action;
  let response = contributionText.ExcessiveReward;

  const [days, dayzLO] = [
    influenceTime.complimentsDays,
    influenceTime.complimentsLOdayz,
  ];
  influenceTime.complimentsDays++;
  let result;
  if (days <= dayzLO) {
    result = checkContribution((tier+1)*2);
  } else {
    const [flat, multiplier, minValue] = [
      influenceTime.complimentsLOflat,
      influenceTime.complimentsLOmultiplier,
      influenceTime.complimentsMinEff,
    ];

    result = checkContribution(
      Math.min(tier + 1 - flat - (days - dayzLO) * multiplier, minValue)
    );
  }
  switch (result) {
    case ContributionType.InsufficientReward: {
      response = contributionText.InsufficientReward;
      break;
    }
    case ContributionType.ExcessiveReward: {
      if (girlMental.mood > 8) {
        girlMental.obedience++;
      }
      break;
    }
    case ContributionType.SufficientReward: {
      if (girlMental.mood > 8) {
        girlMental.obedience++;
      }
      break;
    }
    case ContributionType.UnfairReward: {
      response = contributionText.UnfairReward;
      girlMental.rejection = girlMental.rejection + 2;
      break;
    }
    case ContributionType.UndeservedReward: {
      response = contributionText.UndeservedReward;
      girlMental.rejection = girlMental.rejection + 2;
      break;
    }
  }
  slaveStore.changeMentalStats(girlMental);
  baseStore.setModalData(true, img, request + "\n" + response);
  slaveStore.spendEnergy();
};
