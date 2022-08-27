import { Link } from 'react-router-dom';
import '../../assets/styles/dashboardCard.css';

export default function DashboardCard({ name, company, img }) {
  return (
    <div className="dashboard-card">
      <div className="left-card-wrap">
        <img src={img} alt="img-product" />
        <div>
          <span>{name}</span>
          <span>{company}</span>
        </div>
      </div>
      <div className="right-card-wrap">
        <Link to="/">
          <span>Lihat Detail Produk</span>
        </Link>
      </div>
    </div>
  );
}
