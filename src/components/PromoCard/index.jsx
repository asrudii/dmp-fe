import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import '../../assets/styles/promoCard.css';

export default function PromoCard({ title, desc, img }) {
  return (
    <div className="promo-card">
      <img src={img} alt="promo-img" className="promo-img" />
      <div className="promo-content">
        <h2>{title}</h2>
        <p>{desc}</p>
        <Link to="/">
          <div className="learn-more">
            <span>Pelajari Detail</span>
            <FiChevronRight />
          </div>
        </Link>
      </div>
    </div>
  );
}
