import './AboutUsSection.css';
import { NUMBER_CARD_DATA } from '../../constants/NUMBER_CARD_DATE';
import StatisticCardsSection from '../StatisticCardsSection/StatisticCardsSection';

const AboutUsSection = () => {
  return <StatisticCardsSection cards={NUMBER_CARD_DATA} />;
};
export default AboutUsSection;
