//Совершенно ненормальные методы воздействия
//Которые, наверное, не должны работать
import { baseStore } from "../../../stores/Base/base.store";
import { texts } from "../model/texts";

export const extreme = (tier: number) =>  {
    const img = `${process.env.PUBLIC_URL}/officeSlave/cry2.png`;
    baseStore.setModalData(true, img, texts.extreme.text[tier].action + "\n" + texts.extreme.text[tier].reaction)     

}