import { useState } from "react";
import SimpleLight from "./component/hue/simpleLight/SimpleLight";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SimpleLight />
    </>
  );
}

export default App;
