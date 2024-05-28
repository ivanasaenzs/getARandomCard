import { CardContainer } from "./components/cardContainer/CardContainer";
import { Button } from "./components/button/Button";

import { useState } from "react";

function App() {
  const [diceNumber, setDiceNumber] = useState(5);

  const handleDiceNumber = () => {
    let number = parseInt(Math.random() * 6 + 1);
    setDiceNumber(number);
  };

  return (
    <>
      <Button diceNumber={diceNumber} rollDiceFunction={handleDiceNumber} />
      <CardContainer diceNumber={diceNumber} />
    </>
  );
}

export default App;
