import { girlsInPossessionStore } from "../stores/girlsInPossession/girlsInPossession.store";

export const girlSpendingStamina = (staminaCost: number) => {
  const minValue = -3;  ;
  const stamina = girlsInPossessionStore.selectedGirl.energy;
  if (
    staminaCost !== 1 &&
    stamina - staminaCost < minValue &&
    stamina - 1 >= minValue
  ) {
    return "Подопечная не выдержит таких нагрузок";
  } else if (stamina - 1 < minValue) {  
    return "Кажется, у подопечной совсем не осталось сил.";
  } else {    
    return false;
  }
};
