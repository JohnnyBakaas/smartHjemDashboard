import axios from "axios";
import { apiKey, baseUrl } from "../appSettings";
import { HueLight } from "../contracts/hueLight";

export const getLightsFromBrige = async () => {
  const urlExtention = "/lights";

  try {
    const response = await axios.get(baseUrl + apiKey + urlExtention);
    const data: any = response.data;

    const lightsArray = Object.keys(data).map((key: any) => {
      return {
        id: key,
        ...data[key],
      };
    });

    return lightsArray;
  } catch (error) {
    console.error("There was an error fetching data!", error);
  }
};

export const getLightFromBrige = async (light: number) => {
  const urlExtention = `/lights/${light}`;

  try {
    const response = await axios.get(baseUrl + apiKey + urlExtention);
    const data: any = response.data;
    console.log(data.state);
    return data;
  } catch (error) {
    console.error("There was an error fetching data!", error);
  }
};

/*

Presentasjoner:
  Generelt om presentasjoner:
    Hold det konsist.
    Det som presenteres burde være programert selv.
    Ikke fokuser programmvarer som ikke er skrevet selv.
    Hvis det ikke er kodet burde det ikke vises.

  Mengden endringer uke til ukee: 
	  Det burde være en betydlig mengde endringer.
  	Majoriteten av det som blir vist fram burde være nytt.
	
  Løsnign: 
    Coatching. Dette å ikke kunne presentere på en bra måte kommer til å ha en stor negativ påvirking vidre i livet.
    Oppfordring til å ikke presentere med mindre det er en betydlig endring i prosjektet.

Get sin håntering av tilbakemeldinger så langt:
  Tilbakemeldinger virker ikke alltid ønsket.
  Ingen forsøk på å forstå hva som forusaker problemt.
  "Det går ikke ut over noen andre" når det går ut over hele gruppa.
    Vi blir ufokusert noe som gjør det vanskelig å gi oppmerksomheten våres til de andre som presenterer etter.
    Det gjør show and tell til en negativ opplevelse.

	

*/

/*

  "1": {
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
  },
  "2": {
    state: {
      on: true,
      bri: 95,
      hue: 0,
      sat: 254,
      effect: "none",
      xy: [0.6236, 0.2657],
      ct: 450,
      alert: "select",
      colormode: "ct",
      mode: "homeautomation",
      reachable: true,
    },
    swupdate: { state: "notupdatable", lastinstall: "2021-02-01T13:27:11" },
    type: "Extended color light",
    name: "Extended color light 1",
    modelid: "89665",
    manufacturername: "NAMRON AS",
    productname: "Extended color light",
    capabilities: {
      certified: false,
      control: { colorgamuttype: "other", ct: { min: 160, max: 450 } },
      streaming: { renderer: false, proxy: false },
    },
    config: {
      archetype: "classicbulb",
      function: "mixed",
      direction: "omnidirectional",
    },
    uniqueid: "ec:1b:bd:ff:fe:27:34:9d-01",
    swversion: "2.5.3_r50",
  },
  "3": {
    state: {
      on: true,
      bri: 87,
      hue: 0,
      sat: 254,
      effect: "none",
      xy: [0.6236, 0.2657],
      ct: 450,
      alert: "select",
      colormode: "ct",
      mode: "homeautomation",
      reachable: true,
    },
    swupdate: { state: "notupdatable", lastinstall: "2021-02-18T18:51:57" },
    type: "Extended color light",
    name: "Extended color light 2",
    modelid: "89665",
    manufacturername: "NAMRON AS",
    productname: "Extended color light",
    capabilities: {
      certified: false,
      control: { colorgamuttype: "other", ct: { min: 160, max: 450 } },
      streaming: { renderer: false, proxy: false },
    },
    config: {
      archetype: "classicbulb",
      function: "mixed",
      direction: "omnidirectional",
    },
    uniqueid: "68:0a:e2:ff:fe:dd:61:c5-01",
    swversion: "2.5.3_r50",
  },
  "4": {
    state: {
      on: true,
      bri: 87,
      hue: 0,
      sat: 254,
      effect: "none",
      xy: [0.6236, 0.2657],
      ct: 450,
      alert: "select",
      colormode: "ct",
      mode: "homeautomation",
      reachable: true,
    },
    swupdate: { state: "notupdatable", lastinstall: "2021-02-19T18:03:14" },
    type: "Extended color light",
    name: "Extended color light 3",
    modelid: "89665",
    manufacturername: "NAMRON AS",
    productname: "Extended color light",
    capabilities: {
      certified: false,
      control: { colorgamuttype: "other", ct: { min: 160, max: 450 } },
      streaming: { renderer: false, proxy: false },
    },
    config: {
      archetype: "classicbulb",
      function: "mixed",
      direction: "omnidirectional",
    },
    uniqueid: "68:0a:e2:ff:fe:dd:67:46-01",
    swversion: "2.5.3_r50",
  },
  "5": {
    state: {
      on: true,
      bri: 50,
      hue: 7362,
      sat: 217,
      effect: "none",
      xy: [0.5178, 0.4144],
      ct: 480,
      alert: "select",
      colormode: "ct",
      mode: "homeautomation",
      reachable: true,
    },
    swupdate: { state: "noupdates", lastinstall: "2023-05-12T12:15:22" },
    type: "Extended color light",
    name: "Hue Centura color spot 1",
    modelid: "5045148P7",
    manufacturername: "Signify Netherlands B.V.",
    productname: "Hue Centura color spot",
    capabilities: {
      certified: true,
      control: {
        mindimlevel: 200,
        maxlumen: 300,
        colorgamuttype: "C",
        colorgamut: [
          [0.6915, 0.3083],
          [0.17, 0.7],
          [0.1532, 0.0475],
        ],
        ct: { min: 153, max: 500 },
      },
      streaming: { renderer: true, proxy: true },
    },
    config: {
      archetype: "recessedceiling",
      function: "mixed",
      direction: "downwards",
      startup: { mode: "safety", configured: true },
    },
    uniqueid: "00:17:88:01:09:6e:b2:ab-0b",
    swversion: "1.104.2",
    swconfigid: "D779D146",
    productid: "Philips-LCG002-3-GU10ECLv2",
  },
  "6": {
    state: {
      on: true,
      bri: 50,
      hue: 7362,
      sat: 217,
      effect: "none",
      xy: [0.5178, 0.4144],
      ct: 480,
      alert: "select",
      colormode: "ct",
      mode: "homeautomation",
      reachable: true,
    },
    swupdate: { state: "noupdates", lastinstall: "2023-05-12T12:15:01" },
    type: "Extended color light",
    name: "Hue Centura color spot 2",
    modelid: "5045148P7",
    manufacturername: "Signify Netherlands B.V.",
    productname: "Hue Centura color spot",
    capabilities: {
      certified: true,
      control: {
        mindimlevel: 200,
        maxlumen: 300,
        colorgamuttype: "C",
        colorgamut: [
          [0.6915, 0.3083],
          [0.17, 0.7],
          [0.1532, 0.0475],
        ],
        ct: { min: 153, max: 500 },
      },
      streaming: { renderer: true, proxy: true },
    },
    config: {
      archetype: "recessedceiling",
      function: "mixed",
      direction: "downwards",
      startup: { mode: "safety", configured: true },
    },
    uniqueid: "00:17:88:01:09:6e:b9:a1-0b",
    swversion: "1.104.2",
    swconfigid: "D779D146",
    productid: "Philips-LCG002-3-GU10ECLv2",
  },
  "7": {
    state: {
      on: true,
      bri: 50,
      hue: 7362,
      sat: 217,
      effect: "none",
      xy: [0.5178, 0.4144],
      ct: 480,
      alert: "select",
      colormode: "ct",
      mode: "homeautomation",
      reachable: true,
    },
    swupdate: { state: "noupdates", lastinstall: "2023-05-12T12:15:07" },
    type: "Extended color light",
    name: "Hue Centura color spot 3",
    modelid: "5045148P7",
    manufacturername: "Signify Netherlands B.V.",
    productname: "Hue Centura color spot",
    capabilities: {
      certified: true,
      control: {
        mindimlevel: 200,
        maxlumen: 300,
        colorgamuttype: "C",
        colorgamut: [
          [0.6915, 0.3083],
          [0.17, 0.7],
          [0.1532, 0.0475],
        ],
        ct: { min: 153, max: 500 },
      },
      streaming: { renderer: true, proxy: true },
    },
    config: {
      archetype: "recessedceiling",
      function: "mixed",
      direction: "downwards",
      startup: { mode: "safety", configured: true },
    },
    uniqueid: "00:17:88:01:09:6e:af:f2-0b",
    swversion: "1.104.2",
    swconfigid: "D779D146",
    productid: "Philips-LCG002-3-GU10ECLv2",
  },
  "8": {
    state: {
      on: true,
      bri: 254,
      hue: 7323,
      sat: 218,
      effect: "none",
      xy: [0.5196, 0.4142],
      ct: 484,
      alert: "select",
      colormode: "ct",
      mode: "homeautomation",
      reachable: true,
    },
    swupdate: { state: "noupdates", lastinstall: "2023-05-12T12:15:04" },
    type: "Extended color light",
    name: "Hue Centura color spot 4",
    modelid: "5045148P7",
    manufacturername: "Signify Netherlands B.V.",
    productname: "Hue Centura color spot",
    capabilities: {
      certified: true,
      control: {
        mindimlevel: 200,
        maxlumen: 300,
        colorgamuttype: "C",
        colorgamut: [
          [0.6915, 0.3083],
          [0.17, 0.7],
          [0.1532, 0.0475],
        ],
        ct: { min: 153, max: 500 },
      },
      streaming: { renderer: true, proxy: true },
    },
    config: {
      archetype: "recessedceiling",
      function: "mixed",
      direction: "downwards",
      startup: { mode: "safety", configured: true },
    },
    uniqueid: "00:17:88:01:09:75:73:32-0b",
    swversion: "1.104.2",
    swconfigid: "D779D146",
    productid: "Philips-LCG002-3-GU10ECLv2",
  },
  "9": {
    state: {
      on: true,
      bri: 254,
      hue: 7323,
      sat: 218,
      effect: "none",
      xy: [0.5196, 0.4142],
      ct: 484,
      alert: "select",
      colormode: "ct",
      mode: "homeautomation",
      reachable: true,
    },
    swupdate: { state: "noupdates", lastinstall: "2023-05-12T12:15:15" },
    type: "Extended color light",
    name: "Hue Centura color spot 5",
    modelid: "5045148P7",
    manufacturername: "Signify Netherlands B.V.",
    productname: "Hue Centura color spot",
    capabilities: {
      certified: true,
      control: {
        mindimlevel: 200,
        maxlumen: 300,
        colorgamuttype: "C",
        colorgamut: [
          [0.6915, 0.3083],
          [0.17, 0.7],
          [0.1532, 0.0475],
        ],
        ct: { min: 153, max: 500 },
      },
      streaming: { renderer: true, proxy: true },
    },
    config: {
      archetype: "recessedceiling",
      function: "mixed",
      direction: "downwards",
      startup: { mode: "safety", configured: true },
    },
    uniqueid: "00:17:88:01:09:29:b5:50-0b",
    swversion: "1.104.2",
    swconfigid: "D779D146",
    productid: "Philips-LCG002-3-GU10ECLv2",
  },
  "10": {
    state: {
      on: true,
      bri: 254,
      hue: 7323,
      sat: 218,
      effect: "none",
      xy: [0.5196, 0.4142],
      ct: 484,
      alert: "select",
      colormode: "ct",
      mode: "homeautomation",
      reachable: true,
    },
    swupdate: { state: "noupdates", lastinstall: "2023-05-12T12:20:12" },
    type: "Extended color light",
    name: "Hue Centura color spot 6",
    modelid: "5045148P7",
    manufacturername: "Signify Netherlands B.V.",
    productname: "Hue Centura color spot",
    capabilities: {
      certified: true,
      control: {
        mindimlevel: 200,
        maxlumen: 300,
        colorgamuttype: "C",
        colorgamut: [
          [0.6915, 0.3083],
          [0.17, 0.7],
          [0.1532, 0.0475],
        ],
        ct: { min: 153, max: 500 },
      },
      streaming: { renderer: true, proxy: true },
    },
    config: {
      archetype: "recessedceiling",
      function: "mixed",
      direction: "downwards",
      startup: { mode: "safety", configured: true },
    },
    uniqueid: "00:17:88:01:09:75:48:c2-0b",
    swversion: "1.104.2",
    swconfigid: "D779D146",
    productid: "Philips-LCG002-3-GU10ECLv2",
  },
};

 */
