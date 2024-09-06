import { studiedAllStats } from "../../../entities/StudiedStats/model/allStats";
import {   StudiedStats } from "../../../entities/StudiedStats/model/types";
import { slaveStore } from "../../../stores/slave/model/slave.store";
import { ModalLessonDiligence } from "../model/lessonModalText";

export const getStudyText = (
  key: string,
  currentLevel: number,
  lvlUp: boolean,
  motivation: number,
) => {
  const name = slaveStore.slave.name;
  const pattern = /<<slave_name>>/gi;
  const lvlupSrt =
    "\n  В результате занятий вам удалось значительно продвинуться. Воспитуемый успешно освоил темы нынешнего урока и готов к новым высотам.";
  const studyText = studiedAllStats[key as keyof StudiedStats].lessonText[
    currentLevel
  ].replace(pattern, name) +"\n" + ModalLessonDiligence[motivation].replace(pattern, name);

  if (lvlUp) {
    return studyText + lvlupSrt;;
  }
  return studyText
};
