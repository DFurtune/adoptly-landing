import catFootprint from '../../assets/images/SupportUs/cat-footprint.webp';
import catFootprint1 from '../../assets/images/SupportUs/cat-footprint-1.webp';
import catFootprint2 from '../../assets/images/SupportUs/cat-footprint-2.webp';
import catFootprint3 from '../../assets/images/SupportUs/cat-footprint-3.webp';
import catImg from '../../assets/images/SupportUs/Cat.webp';
import dogimg from '../../assets/images/SupportUs/Dog.webp';
import './SupportUs.css';
import { useTranslation } from 'react-i18next';
import { Icon } from '../Icon/Icon';

const SupportUs = () => {
  const { t } = useTranslation();
  return (
    <section className="supportUs">
      <div className="text-box">
        <h3 className="title">{t('supportUs.title')}</h3>
        <p className="description">{t('supportUs.description')}</p>
        <div className="support-buttons">
          <a href="mailto:info@adoptly.app " className="email-btn">
            <Icon
              id="icon-email"
              size={28}
              height={28}
              className="icon-email"
            />
            <span>{t('supportUs.email')}</span>
          </a>

          <a
            href="https://www.linkedin.com/company/adoptly-app/posts/?feedView=all"
            className="linkedin-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <Icon
              id="icon-linkedin"
              size={29}
              height={28}
              className="icon-linkedin"
            />
            <span>Linkedln</span>
          </a>
        </div>
      </div>

      <img className="img-dog" src={dogimg} alt="dog" loading="lazy" />
      <img className="img-cat" src={catImg} alt="cat" loading="lazy" />

      <img
        className="images-footprint footprint"
        src={catFootprint}
        alt="cat-footprint"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <img
        className="images-footprint footprint-1"
        src={catFootprint1}
        alt="cat-footprint"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <img
        className="images-footprint footprint-2"
        src={catFootprint2}
        alt="cat-footprint"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <img
        className="images-footprint footprint-3"
        src={catFootprint3}
        alt="cat-footprint"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
    </section>
  );
};

export default SupportUs;
