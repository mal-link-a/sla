//Понятия не имею, но пока выглядит как сброс бомбы на голову работника
import { baseStore } from "../../../stores/Base/base.store";
import { texts } from "../model/texts";

export const emotional = (tier: number) =>  {
    const img = `${process.env.PUBLIC_URL}/officeSlave/happy2.png`;
    baseStore.setModalData(true, img, texts.emotional.text[tier].action + "\n" + texts.emotional.text[tier].reaction)      
        return tier;
}