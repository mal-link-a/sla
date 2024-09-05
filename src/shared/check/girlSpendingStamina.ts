import { slaveStore } from "../../stores/slave/slave.store";

export const girlSpendingStamina = (staminaCost: number) => {
  const minValue = 0;  ;
  const stamina = slaveStore.slave.energy;
  if (
    staminaCost !== 1 &&
    stamina - staminaCost < minValue &&
    stamina - 1 >= minValue
  ) {
    return "Сотрудник не выдержит таких нагрузок";
  } else if (stamina - 1 < minValue) {  
    return "Кажется, у сотрудника совсем не осталось сил.";
  } else {    
    return false;
  }
};
