import { slaveStore } from "../stores/slave/slave.store"


export const dayEnd = () => {
    console.log("dayEnd");
    if (slaveStore.slave.mental.contribution === 0 && slaveStore.slave.energy <3) {
        slaveStore.newGoodDay();

    } else if (slaveStore.slave.mental.contribution > 3) {
        slaveStore.newBadDay();
    }
    else {
        slaveStore.newNormalDay();
    }
    
}