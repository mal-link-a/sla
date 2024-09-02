//Играем в комплименты. Комплименты - это то, что работает какое-то время, но, 
//если кормить завтраками на постоянной основе, то они перестанут работать
import { baseStore } from "../../../stores/Base/base.store";
import { texts } from "../model/texts";
import { influenceTime } from "./influenceTime";

export const compliment = (tier: number) =>  {
    const img = `${process.env.PUBLIC_URL}/officeSlave/happy1.png`;
    
    const [days, dayzLO] = [influenceTime.complimentsDays, influenceTime.complimentsLOdayz];
    influenceTime.complimentsDays++;
    if (days <= dayzLO) {  
        baseStore.setModalData(true, img, texts.compliment.text[tier].action + "\n" + texts.compliment.text[tier].reaction)      
        return (tier+1)*2;
    }
    else {
        const [flat, multiplier, minValue] = [influenceTime.complimentsLOflat, influenceTime.complimentsLOmultiplier, influenceTime.complimentsMinEff];
        baseStore.setModalData(true, img, texts.compliment.text[tier-1].action + "\n" + texts.compliment.text[tier].reactionRepeat)
        return Math.min((tier+1)-flat-(days-dayzLO)*multiplier, minValue);
    }
}