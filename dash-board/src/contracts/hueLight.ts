export type HueLight = {
  manufacturername: string;
  type: "Dimmable light" | "Extended color light" | string;
  name: string;
  productname: string;
  state: {
    bri: number;
    on: boolean;
    reachable: boolean;
    xy?: [number, number];
  };
};

/*
{
    "state": {
        "on": true,
        "bri": 254,
        "hue": 0,
        "sat": 254,
        "effect": "none",
        "xy": [
            0.2911, // RGB
            0.2248
        ], 
        "ct": 450, // rgbW
        "alert": "select",
        "colormode": "ct",
        "mode": "homeautomation",
        "reachable": true
    },
    "swupdate": {
        "state": "notupdatable",
        "lastinstall": "2021-02-01T13:27:11"
    },
    "type": "Extended color light",
    "name": "Extended color light 1",
    "modelid": "89665",
    "manufacturername": "NAMRON AS",
    "productname": "Extended color light",
    "capabilities": {
        "certified": false,
        "control": {
            "colorgamuttype": "other",
            "ct": {
                "min": 160,
                "max": 450
            }
        },
        "streaming": {
            "renderer": false,
            "proxy": false
        }
    },
    "config": {
        "archetype": "classicbulb",
        "function": "mixed",
        "direction": "omnidirectional"
    },
    "uniqueid": "ec:1b:bd:ff:fe:27:34:9d-01",
    "swversion": "2.5.3_r50"
}
*/
