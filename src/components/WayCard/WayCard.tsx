import './WayCard.css';
import startWay from '../../assets/images/OurWay/start-icon.webp';

const WayCard = () => {
  return (
    <div className="timeline-item">
      <div className="timeline-number">
        <img src={startWay} alt="Image 1" />
        <span>01</span>
      </div>
      <div className="timeline-info">
        <span>Липень 2025</span>
        <h4>Старт ініціативи</h4>
        <p>Збір команди на Team Challenge та визначення місії проєкту. </p>
      </div>
    </div>
  );
};
export default WayCard;
