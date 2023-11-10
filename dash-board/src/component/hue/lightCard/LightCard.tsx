import { useState } from "react";
import styles from "./LightCard.module.css";
import { HueLight } from "../../../contracts/hueLight";
import { togleLight } from "../../../functions/togleLight";
import { getLightFromBrige } from "../../../functions/getLightsFromBrige";

type LightCardProps = {
  hueLightData: HueLight;
  lightNumber: number;
};

const LightCard = ({ hueLightData, lightNumber }: LightCardProps) => {
  const [on, setOn] = useState(hueLightData.state.on);

  const togle = async () => {
    const state = await togleLight(lightNumber);
    setOn(state);
  };

  return (
    <div className={on ? [styles.card, styles.on].join(" ") : styles.card}>
      <h2 className={styles.name}>{hueLightData.name}</h2>
      <button
        className={styles.button}
        onClick={() => {
          togle();
        }}
      >
        {on ? "Skru av lys" : "Skru på lys"}
      </button>
    </div>
  );
};

export default LightCard;
