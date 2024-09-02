//Играем в словесные оскорбления
//
import { baseStore } from "../../../stores/Base/base.store";
import { texts } from "../model/texts";

export const censure = (tier: number) =>  {
    const img = `${process.env.PUBLIC_URL}/officeSlave/cry1.png`;
    baseStore.setModalData(true, img, texts.censure.text[tier].action + "\n" + texts.censure.text[tier].reaction)      
        return tier;
}