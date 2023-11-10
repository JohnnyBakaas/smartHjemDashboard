import axios from "axios";
import { apiKey, baseUrl } from "../appSettings";
import { getLightFromBrige, getLightsFromBrige } from "./getLightsFromBrige";

const turnOnAndOffLiight = (on: boolean, light: number) => {
  const urlExtention = `/lights/${light}/state`;
  axios.put(baseUrl + apiKey + urlExtention, {
    on: on,
  });
};

const getStateOfLight = async (light: number) => {
  const data = await getLightsFromBrige();

  if (data && data[light]) {
    console.log(data[light].state.on);
    return data[light].state.on;
  }
  console.log("BIG F getStateOfLight");
  return "BIG F";
};

export const togleLight = async (light: number) => {
  const data = await getLightFromBrige(light);
  const on = data.state.on;

  turnOnAndOffLiight(!on, light);

  return !on;
};

export const turnOnLight = (light: number) => {
  turnOnAndOffLiight(true, light);
};

export const turnOffLight = (light: number) => {
  turnOnAndOffLiight(false, light);
};
