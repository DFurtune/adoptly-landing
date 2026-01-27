import React from 'react';
import './NumberCard.css';

interface NumberCardProps {
  cardNumber: string;
  cardTitle: string;
  cardDescription: string;
}

const NumberCard: React.FC<NumberCardProps> = ({
  cardNumber,
  cardTitle,
  cardDescription,
}) => {
  return (
    <div className="number-card">
      {cardNumber ? (
        <h3 className="number-card__number">{cardNumber}</h3>
      ) : (
        <h3 className="number-card__number">—</h3>
      )}
      <span className="number-card__divider" />
      <div className="number-card__text">
        {<span className="number-card__title">{cardTitle}</span>}
        {cardDescription}
      </div>
    </div>
  );
};

export default NumberCard;
