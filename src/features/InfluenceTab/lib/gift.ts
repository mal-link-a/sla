//Выглядит как беспроигрышный вариант, даже учесть, что в одном варианте мы дарим цветы
import { baseStore } from "../../../stores/Base/base.store";
import { texts } from "../model/texts";

export const gift = (tier: number) =>  {
    const img = `${process.env.PUBLIC_URL}/officeSlave/happy1.png`;
    baseStore.setModalData(true, img, texts.gift.text[tier].action + "\n" + texts.gift.text[tier].reaction)      
        return tier;
}