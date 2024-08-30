import {
  studiedSexStats,
} from "../../../entities/StudiedStats/model/sexStats";
import { StudiedSexStats } from "../../../entities/StudiedStats/model/types";
import { girlsInPossessionStore } from "../../../stores/girlsInPossession/girlsInPossession.store";

export const getStudyText = (
  key: string,
  currentLevel: number,
  lvlUp: boolean
) => {
  const name = girlsInPossessionStore.selectedGirl.name;
  const pattern = /<<slave_name>>/gi;
  const lvlupSrt =
    "\n  В результате занятий вам удалось значительно продвинуться. Воспитуемая успешно освоила темы нынешнего урока и готова к новым высотам.";
  const studyText = studiedSexStats[key as keyof StudiedSexStats].lessonText[
    currentLevel
  ].replace(pattern, name);

  if (lvlUp) {
    return studyText + lvlupSrt;;
  }
  return studyText
};
