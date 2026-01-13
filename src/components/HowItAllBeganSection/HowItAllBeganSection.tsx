import handshaking from '../../assets/images//HowItAllBegan/handshaking.webp';

const HowItAllBeganSection = () => {
  return (
    <section className="how-it-all-began-section">
      <h2>Як все почалося</h2>
      <p>
        У липні 2025 року ми об‘єдналися, щоб використати професійні навички для
        соціального проєкту. Віримо, що платформа Adoptly зробить прилаштування
        тварин простим, прозорим та доступним.
      </p>
      <div>
        <img
          src={handshaking}
          alt="handshaking"
          loading="lazy"
          decoding="async"
        />
        <h3>Народжені на Team Challenge </h3>
        <p>
          Основна команда сформувалася на платформі Team Challenge – де
          інженери, дизайнери, QA та менеджери знаходять партнерів для перших
          значущих проєктів.
        </p>
      </div>
    </section>
  );
};
export default HowItAllBeganSection;
