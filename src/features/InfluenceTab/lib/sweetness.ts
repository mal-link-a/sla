//Выглядит как беспроигрышный вариант, кроме тех. кто не любит сладкое.
import { baseStore } from "../../../stores/Base/base.store";
import { texts } from "../model/texts";

export const sweetness = (tier: number) =>  {
    const img = `${process.env.PUBLIC_URL}/officeSlave/happy1.png`;
    baseStore.setModalData(true, img, texts.sweetness.text[tier].action + "\n" + texts.sweetness.text[tier].reaction)      
        return tier;
}