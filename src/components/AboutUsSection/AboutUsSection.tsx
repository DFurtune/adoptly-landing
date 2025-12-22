import { useTranslation } from 'react-i18next';
import './AboutUsSection.css';
import { NUMBER_CARD_DATA } from '../../constants/NUMBER_CARD_DATE';
import StatisticCardsSection from '../StatisticCardsSection/StatisticCardsSection';

const AboutUsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="our-skills-in-numbers">
      <h2>{t('ourNumbers.title')}</h2>
      <StatisticCardsSection cards={NUMBER_CARD_DATA} />
    </section>
  );
};
export default AboutUsSection;
