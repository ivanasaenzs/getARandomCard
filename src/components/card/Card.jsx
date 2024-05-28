import { GiSpellBook } from "react-icons/gi";

import "./card.css";

export const Card = ({ cardTitle, cardImg, cardFooter }) => {
  return (
    <>
      <div className="card">
        <p className="card__title">I am card Nº {cardTitle}!</p>

        <img src={cardImg} alt="Card Image" className="card__img" />

        <div className="card__footer">
          <p className="card__message">{cardFooter}</p>
          <GiSpellBook className="card__icon" />
        </div>
      </div>
    </>
  );
};
