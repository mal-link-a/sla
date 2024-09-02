//Лишаем привилегий человека
//
import { baseStore } from "../../../stores/Base/base.store";
import { texts } from "../model/texts";

export const revocationOfPrivileges = (tier: number) =>  {
    const img = `${process.env.PUBLIC_URL}/officeSlave/cry2.png`;
    baseStore.setModalData(true, img, texts.revocationOfPrivileges.text[tier].action + "\n" + texts.revocationOfPrivileges.text[tier].reaction)      
        return tier;
}