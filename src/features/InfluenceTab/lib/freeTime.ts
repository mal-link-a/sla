//Играем во свободное время. РАБотник будет радоваться
//И даже начинать думать, что ты добрый... Беспроигрышная тема
import { baseStore } from "../../../stores/Base/base.store";
import { texts } from "../model/texts";

export const freeTime = (tier: number) =>  {
    let img = `${process.env.PUBLIC_URL}/officeSlave/coffee.png`;
    if (tier !==1) {
        img = `${process.env.PUBLIC_URL}/officeSlave/outside.png`;
    }
    baseStore.setModalData(true, img, texts.freeTime.text[tier].action + "\n" + texts.freeTime.text[tier].reaction)      
        return tier;
}