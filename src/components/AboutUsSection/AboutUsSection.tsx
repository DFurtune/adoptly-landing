import './AboutUsSection.css';
import { NUMBER_CARD_DATA } from '../../constants/NUMBER_CARD_DATE';
import StatisticCardsSection from '../StatisticCardsSection/StatisticCardsSection';

const AboutUsSection = () => {
  return (
    <section className="our-skills-in-numbers">
      <StatisticCardsSection cards={NUMBER_CARD_DATA} />
    </section>
  );
};
export default AboutUsSection;
