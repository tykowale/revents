import { INCREAMENT_COUNTER, DECREMENET_COUNTER } from "./testConstants";

export const incrementCounter = () => {
  return {
    type: INCREAMENT_COUNTER
  };
};

export const DECREMENT_COUNTER = () => {
  return {
    type: DECREMENET_COUNTER
  };
};