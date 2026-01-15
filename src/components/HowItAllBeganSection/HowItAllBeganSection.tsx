import handshaking from '../../assets/images//HowItAllBegan/handshaking.webp';
import './HowItAllBeganSection.css';
import { useTranslation } from 'react-i18next';

const HowItAllBeganSection = () => {
  const { t } = useTranslation();
  return (
    <section className="how-it-all-began-section container">
      <div className="first-block">
        <h3>{t('HowItAllBegan.title')}</h3>
        <p>{t('HowItAllBegan.paragraphs.1')}</p>
      </div>
      <div className="second-block">
        <img
          src={handshaking}
          alt="handshaking"
          loading="lazy"
          decoding="async"
        />
        <div>
          <h4>{t('HowItAllBegan.subtitle')}</h4>
          <p>{t('HowItAllBegan.paragraphs.2')}</p>
        </div>
      </div>
    </section>
  );
};
export default HowItAllBeganSection;
