import { Dice } from "../dice/Dice";

import "./button.css";

export const Button = ({ diceNumber, rollDiceFunction }) => {
  return (
    <>
      <div className="btn-wrapper">
        <p className="btn-text">Roll the dice to get your literary quote!</p>
        <button onClick={rollDiceFunction}>
          <Dice diceNumber={diceNumber} />
        </button>
      </div>
    </>
  );
};
