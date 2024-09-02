
//Лишаем привилегий человека чуть иначе
//
import { baseStore } from "../../../stores/Base/base.store";
import { texts } from "../model/texts";

export const strictRules = (tier: number) =>  {
    const img = `${process.env.PUBLIC_URL}/officeSlave/cry1.png`;
    baseStore.setModalData(true, img, texts.strictRules.text[tier].action + "\n" + texts.strictRules.text[tier].reaction)      
        return tier;
}