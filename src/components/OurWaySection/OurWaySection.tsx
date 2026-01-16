import { MILESTONES_DATA } from '../../constants/MILESTONES_DATE';
import WayCard from '../WayCard/WayCard';
import './OurWaySection.css';

const OurWaySection = () => {
  return (
    <section className="our-way-section">
      <div>
        <h3>Наш шлях</h3>
        <h4 className="section-subtitle">Етапи розвитку проєкту</h4>
      </div>
      <div className="timeline">
        {MILESTONES_DATA.map(milestone => (
          <WayCard
            key={milestone.cardNumber}
            cardImageSrc={milestone.cardImageSrc}
            cardImgAlt={milestone.cardImgAlt}
            cardNumber={milestone.cardNumber}
            cardDate={milestone.cardDate}
            cardTitle={milestone.cardTitle}
            cardDescription={milestone.cardDescription}
            isActive={milestone.isActive}
          />
        ))}
      </div>
    </section>
  );
};

export default OurWaySection;
