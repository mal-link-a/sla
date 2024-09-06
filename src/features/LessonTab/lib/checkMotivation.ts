import { slaveStore } from "../../../stores/slave/model/slave.store";

export const checkMotivation = () => {
  const [obedience, rejection, mood] = [
    slaveStore.slave.mental.obedience,
    slaveStore.slave.mental.rejection,
    slaveStore.slave.mental.mood,
  ];
  console.log([obedience, rejection, mood]);
  if (rejection >= obedience) return -1;
  let res = obedience - rejection;
  if (mood > 3 && res < 2) return 0;
  if (mood < 4) {
    res = Math.ceil(res / 3);
  } else if (mood < 6) {
    res--;
  } else if (mood > 7) {
    res++;
  }
  return Math.min(res, 5);
};
