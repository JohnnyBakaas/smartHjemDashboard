import axios from "axios";
import { useEffect, useState } from "react";
import {
  getLightFromBrige,
  getLightsFromBrige,
} from "../../../functions/getLightsFromBrige";
import { togleLight } from "../../../functions/togleLight";
import LightCard from "../lightCard/LightCard";
import { HueLight } from "../../../contracts/hueLight";
import DimmerCard from "../dimmerCard/DimmerCard";

const lights = "/api/w4Kl47xqg8ZB7GsYJh07KGFIDzsiYduj3G9hAOWp/lights";
const setLight = "/api/w4Kl47xqg8ZB7GsYJh07KGFIDzsiYduj3G9hAOWp/lights/3/state";
const setLightMessage = {
  devicetype: "my_hue_app#iphone peter",
  on: false,
};

const testData = {
  state: {
    on: true,
    bri: 254,
    alert: "select",
    mode: "homeautomation",
    reachable: false,
  },
  swupdate: { state: "transferring", lastinstall: "2022-06-30T12:04:35" },
  type: "Dimmable light",
  name: "Natt lampe",
  modelid: "LWO001",
  manufacturername: "Signify Netherlands B.V.",
  productname: "Hue filament bulb",
  capabilities: {
    certified: true,
    control: { mindimlevel: 2000, maxlumen: 550 },
    streaming: { renderer: false, proxy: false },
  },
  config: {
    archetype: "vintagebulb",
    function: "decorative",
    direction: "omnidirectional",
    startup: { mode: "safety", configured: true },
  },
  uniqueid: "00:17:88:01:09:01:71:01-0b",
  swversion: "1.93.11",
  swconfigid: "9732F7F5",
  productid: "Philips-LWO001-1-G93CFDLv1",
};

const SimpleLight = () => {
  const [lights, setLights] = useState<HueLight[]>([]);

  useEffect(() => {
    const getAndSetLightsFromBrige = async () => {
      const data = await getLightsFromBrige();
      //console.log(data);
      if (data) setLights(data);
    };
    getAndSetLightsFromBrige();
  }, []);

  const turnOnAllLights = () => {
    for (let i = 2; i < 11; i++) togleLight(i);
  };

  return (
    <div>
      <button onClick={() => turnOnAllLights()}>Togle all light</button>
      <button onClick={() => togleLight(2)}>Togle light 2</button>
      <button onClick={() => togleLight(3)}>Togle light 3</button>
      <button onClick={() => togleLight(4)}>Togle light 4</button>
      <button onClick={() => togleLight(5)}>Togle light 5</button>
      <button onClick={() => togleLight(6)}>Togle light 6</button>
      <button onClick={() => togleLight(7)}>Togle light 7</button>
      <h1>JsonTestGreie</h1>
      <button
        onClick={() => {
          getLightFromBrige(2);
        }}
      >
        Test greie XD
      </button>
      <h1>JsonTestGreie</h1>

      <DimmerCard />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {lights?.map((data, i) => (
          <LightCard hueLightData={data} lightNumber={i + 1} key={i} />
        ))}
      </div>
    </div>
  );
};

export default SimpleLight;
