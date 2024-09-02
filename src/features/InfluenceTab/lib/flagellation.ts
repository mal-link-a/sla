//Физические наказания. Если что, осуждаю.
//Рукоприкладство в любой форме почти так же ужасно, как родиться чёрным
import { baseStore } from "../../../stores/Base/base.store";
import { texts } from "../model/texts";

export const flagellation = (tier: number) =>  {
    const img = `${process.env.PUBLIC_URL}/officeSlave/cry2.png`;
    baseStore.setModalData(true, img, texts.flagellation.text[tier].action + "\n" + texts.flagellation.text[tier].reaction)      
        return tier;
}