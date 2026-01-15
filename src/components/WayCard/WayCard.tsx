import './WayCard.css';
import React from 'react';

interface WayCardProps {
  cardImageSrc: string;
  cardImgAlt?: string;
  cardNumber: string;
  cardDate: string;
  cardTitle: string;
  cardDescription: string;
}

const WayCard: React.FC<WayCardProps> = ({
  cardImageSrc,
  cardImgAlt,
  cardNumber,
  cardDate,
  cardTitle,
  cardDescription,
}) => {
  return (
    <div className="timeline-item">
      <div className="timeline-number">
        <img
          src={cardImageSrc}
          alt={cardImgAlt || 'Way card image'}
          loading="lazy"
          decoding="async"
        />
        <span>{cardNumber}</span>
      </div>
      <div className="timeline-info">
        <span>{cardDate}</span>
        <h4>{cardTitle}</h4>
        <p>{cardDescription}</p>
      </div>
    </div>
  );
};

export default WayCard;
