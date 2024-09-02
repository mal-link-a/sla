//Наказание стыдом. ИРЛ, наверное, пустило бы все надежды нормально работать в компании под откос
//
import { baseStore } from "../../../stores/Base/base.store";
import { texts } from "../model/texts";

export const embarrassment = (tier: number) =>  {
    const img = `${process.env.PUBLIC_URL}/officeSlave/cry1.png`;
    baseStore.setModalData(true, img, texts.embarrassment.text[tier].action + "\n" + texts.embarrassment.text[tier].reaction)      
        return tier;
}