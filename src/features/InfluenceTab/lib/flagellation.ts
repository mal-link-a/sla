//Физические наказания. Если что, осуждаю.
//Рукоприкладство в любой форме почти так же ужасно, как родиться чёрным
import { slaveImg } from "../../../entities/Girl/model/imgPath";
import { contributionText } from "../../../entities/MentalStats/model/contributionText";
import { ContributionType } from "../../../entities/MentalStats/model/types";
import { baseStore } from "../../../stores/Base";
import { slaveStore } from "../../../stores/slave/slave.store";
import { texts } from "../model/texts";
import { checkContribution } from "./universal/checkContribution";

export const flagellation = (tier: number) => {
  const girlMental = Object.assign(
    {},
    slaveStore.slave.mental
  );
  const img = `${process.env.PUBLIC_URL}/girls/${slaveStore.slave.id}/${slaveImg.sad3}`;
  const request = texts.flagellation.text[tier].action + "\n";
  let response = contributionText.ExcessivePunishment;
  girlMental.contribution= 0;

  const result = checkContribution(-tier - 3);
  switch (result) {
    case ContributionType.InsufficientPunishment: {
      break;
    }
    case ContributionType.ExcessivePunishment: {
      if (girlMental.mood < 4) {
        girlMental.mood--;
        girlMental.rejection--;
      }
      break;
    }
    case ContributionType.SufficientPunishment: {
      if (girlMental.mood < 4) {
        girlMental.mood--;
        girlMental.rejection--;
      }
      break;
    }
    case ContributionType.UnfairPunishment: {
      girlMental.mood--;
      girlMental.rejection = girlMental.rejection + 2;
      response = contributionText.UnfairPunishment;
      break;
    }
    case ContributionType.UndeservedPunishment: {
      girlMental.mood--;
      girlMental.rejection++;
      response = contributionText.UndeservedPunishment;
      break;
    }
  }
  slaveStore.changeMentalStats(girlMental);
  slaveStore.spendEnergy();
  baseStore.setModalData(true, img, request + "\n" + response);
};
