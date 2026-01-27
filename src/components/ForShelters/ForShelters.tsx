import Button from '../Button/Button';
import sheltersAccountImg from '../../assets/images/ForShelters/shelters-account.webp';
import iconCheck from '../../assets/images/ForShelters/icon-check.webp';
import iconShare from '../../assets/images/ForShelters/icon-share.webp';
import './ForShelters.css';

const ForShelters = () => {
  return (
    <section id="shelters" className="for-shelters">
      <div className="left">
        <span>Притулкам</span>
        <h2> Взяти участь у розвитку платформи</h2>
        <p className="description">
          Якщо ви хочете взяти участь в розвитку платформи та отримати зручний
          інструмент – приходьте на тестування. Ваша думка формує продукт.
        </p>
        <ul className="questions-list">
          <li className="question">
            <img
              src={iconCheck}
              alt="icon check"
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />
            <p>Скільки часу витрачаєте на створення картки?</p>
          </li>
          <li className="question">
            <img
              src={iconCheck}
              alt="icon check"
              aria-hidden="true"
              loading="lazy"
              decoding="async"
            />
            <p>Чи готові ви з нами співпрацювати?</p>
          </li>
        </ul>
        <Button
          maxWidth={333}
          height={66}
          as="a"
          href="https://forms.gle/QCN2T57Zo8vmYEWe6"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '20px',
            fontWeight: 700,
            backgroundColor: '#1E293B',
            gap: '8px',
          }}
        >
          Пройти опитування (3 хв){' '}
          <img
            src={iconShare}
            alt="icon share"
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
        </Button>
      </div>
      <div className="right">
        <img
          src={sheltersAccountImg}
          alt="shelters account illustration"
          aria-hidden="true"
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  );
};
export default ForShelters;
