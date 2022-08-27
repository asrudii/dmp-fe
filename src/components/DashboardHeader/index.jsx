import { FiSearch } from 'react-icons/fi';
import { Input } from 'antd';
import '../../assets/styles/dashboardHeader.css';
import headerShape from '../../assets/img/header-shape.svg';
import IlSearch from '../../assets/img/il-search.svg';

export default function DashboardHeader() {
  return (
    <div className="dashboard-header">
      <div className="dashboard-header-content">
        <span className="title-header">Selamat Datang Jane Cooper!</span>
        <span>
          Membandingkan produk lebih mudah dengan Digital Marketing Platform
        </span>
        <Input
          className="search-header"
          size="large"
          placeholder="Cari Produk..."
          prefix={<FiSearch size={24} />}
        />
      </div>
      <div>
        <img src={IlSearch} alt="header-shape" className="il-header" />
        <img src={headerShape} alt="header-shape" className="shape-header" />
      </div>
    </div>
  );
}
