//Играем во время вместе. По идее должно работать, если работник нас не боится,
//Будет повышать привязанность или как я её там назвал
import { baseStore } from "../../../stores/Base/base.store";
import { texts } from "../model/texts";

export const timeTogether = (tier: number) =>  {
    const img = `${process.env.PUBLIC_URL}/officeSlave/coffee.png`;
    baseStore.setModalData(true, img, texts.timeTogether.text[tier].action + "\n" + texts.timeTogether.text[tier].reaction)      
        return tier;
}