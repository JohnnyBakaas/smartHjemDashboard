import { useState } from "react";
import styles from "./DimmerCard.module.css";

const DimmerCard = () => {
  const [bri, setBri] = useState(0);

  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{"Ett navn"}</h2>
      <input
        type="range"
        name=""
        id=""
        value={(bri * 60) / 254}
        max={60}
        step={1}
        onChange={(e) => {
          setBri((Number(e.target.value) / 60) * 254);
        }}
        className={styles.ranger}
      />
      <button>On/Off</button>
    </div>
  );
};

export default DimmerCard;
