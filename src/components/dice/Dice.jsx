import {
  FaDiceOne,
  FaDiceTwo,
  FaDiceThree,
  FaDiceFour,
  FaDiceFive,
  FaDiceSix,
} from "react-icons/fa";

import "./dice.css";

export const Dice = ({ diceNumber }) => {
  return (
    <>
      {diceNumber === 1 && <FaDiceOne className="btn-icon" />}
      {diceNumber === 2 && <FaDiceTwo className="btn-icon" />}
      {diceNumber === 3 && <FaDiceThree className="btn-icon" />}
      {diceNumber === 4 && <FaDiceFour className="btn-icon" />}
      {diceNumber === 5 && <FaDiceFive className="btn-icon" />}
      {diceNumber === 6 && <FaDiceSix className="btn-icon" />}
    </>
  );
};
