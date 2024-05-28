import { Card } from "../card/Card";
import { Dice } from "../dice/Dice";

import "./cardContainer.css";

import card1Img from "../../assets/card1.png";
import card2Img from "../../assets/card2.png";
import card3Img from "../../assets/card3.png";
import card4Img from "../../assets/card4.png";
import card5Img from "../../assets/card5.png";
import card6Img from "../../assets/card6.png";

export const CardContainer = ({ diceNumber }) => {
  return (
    <>
      <div className="card__container">
        <h2 className="card__container__title">
          The result is
          <Dice diceNumber={diceNumber} />
        </h2>
        {diceNumber === 1 && (
          <Card
            cardTitle={diceNumber}
            cardImg={card1Img}
            cardFooter={"Little Women by Louisa May Alcott"}
          />
        )}
        {diceNumber === 2 && (
          <Card
            cardTitle={diceNumber}
            cardImg={card2Img}
            cardFooter={"Alice's Adventures In Wonderland by Lewis Carroll"}
          />
        )}
        {diceNumber === 3 && (
          <Card
            cardTitle={diceNumber}
            cardImg={card3Img}
            cardFooter={"Jane Eyre by Charlotte Brontë"}
          />
        )}
        {diceNumber === 4 && (
          <Card
            cardTitle={diceNumber}
            cardImg={card4Img}
            cardFooter={"A Little Princess by Frances Hodgson Burnett"}
          />
        )}
        {diceNumber === 5 && (
          <Card
            cardTitle={diceNumber}
            cardImg={card5Img}
            cardFooter={"Anne of Green Gables by L. M. Montgomery"}
          />
        )}
        {diceNumber === 6 && (
          <Card
            cardTitle={diceNumber}
            cardImg={card6Img}
            cardFooter={"David Copperfield by Charles Dickens"}
          />
        )}
      </div>
    </>
  );
};
