//Играем во свободное время. РАБотник будет радоваться
//И даже начинать думать, что ты добрый... Беспроигрышная тема
import { contributionText } from "../../../entities/MentalStats/model/contributionText";
import { ContributionType } from "../../../entities/MentalStats/model/types";
import { baseStore } from "../../../stores/Base/base.store";
import { slaveStore } from "../../../stores/slave/slave.store";
import { texts } from "../model/texts";
import { checkContribution } from "./universal/checkContribution";

export const freeTime = (tier: number) => {
  const girlMental = Object.assign(
    {},
    slaveStore.slave.mental
  );
  let img = `${process.env.PUBLIC_URL}/officeSlave/happy1.png`;
  const request = texts.freeTime.text[tier].action + "\n";
  let response = contributionText.ExcessiveReward;
  if (tier !== 1) {
    img = `${process.env.PUBLIC_URL}/officeSlave/outside.png`;
  }

  const result = checkContribution((tier + 1) * 2);
  switch (result) {
    case ContributionType.InsufficientReward: {
      break;
    }
    case ContributionType.ExcessiveReward: {
      if (girlMental.mood < 6) {
        girlMental.mood++;
      }
      break;
    }
    case ContributionType.SufficientReward: {
      if (girlMental.mood < 7) {
        girlMental.mood++;
        response = contributionText.SufficientReward;
      }
      break;
    }
    case ContributionType.UnfairReward: {
      if (girlMental.mood < 8) {
        girlMental.mood++;
        response = contributionText.UnfairReward;
      }
      break;
    }
    case ContributionType.UndeservedReward: {
      if (girlMental.mood < 7) {
        girlMental.mood++;
      }
      break;
    }
  }
  slaveStore.changeMentalStats(girlMental);
  slaveStore.spendEnergy();
  baseStore.setModalData(true, img, request + "\n" + response);
};
