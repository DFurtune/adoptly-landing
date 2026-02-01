import React from 'react';
import NumberCard from '../NumberCard/NumberCard';
import { useTranslation } from 'react-i18next';
import { NumberCardData } from 'constants/NUMBER_CARD_DATE';
import './StatisticCardsSection.css';

interface StatisticCardsSectionProps {
  cards: NumberCardData[];
}

const StatisticCardsSection: React.FC<StatisticCardsSectionProps> = ({
  cards,
}) => {
  const { t } = useTranslation();

  return (
    <section className="statistic-section-cards">
      {cards.map(card => (
        <NumberCard
          key={card.id}
          cardNumber={card.cardNumber}
          cardTitle={t(card.cardTitle)}
          cardDescription={t(card.cardDescription)}
        />
      ))}
    </section>
  );
};

export default StatisticCardsSection;
