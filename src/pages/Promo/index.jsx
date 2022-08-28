import { Checkbox } from 'antd';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import '../../assets/styles/promo.css';
import Template from '../../components/Template';
import { FiArrowLeft } from 'react-icons/fi';
import PromoCard from '../../components/PromoCard';

export default function Promo() {
  return (
    <Template defaultSelectedKeys="3">
      <div className="container-primary">
        <nav className="nav">
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/">Promo</Breadcrumb.Item>
          </Breadcrumb>
          <Link to="/">
            <div className="nav-topright">
              <FiArrowLeft size={24} color="#BC1414" />
              <span>Back</span>
            </div>
          </Link>
        </nav>
        <div className="title">
          <h2>
            Temukan beragam promo dan penawaran paket menarik dari IndiHome
          </h2>
        </div>
        <div className="filter">
          <span>Filter</span>
          <div className="filter-list">
            <Checkbox>Penawaran Paket</Checkbox>
            <Checkbox>Join Promo</Checkbox>
            <Checkbox>Undian</Checkbox>
            <Checkbox>Promo Lainnya</Checkbox>
          </div>
        </div>
        <div className="promo-list">
          <PromoCard
            title="Paket IndiHome (Dengan Akses Netflix)"
            desc="Streaming semua tayangan di Netflix sepuasnya makin seru dengan intern..."
            img="https://subsystem.indihome.co.id/cms-ih/assets/uploads/promorec/bundling_Netflix_Web-Mobile-Thumbnail_656px-x-578px.png"
          />
          <PromoCard
            title="Paket IndiHome (Dengan Akses Disney+ Hotstar)"
            desc="Serunya internetan cepat hingga 300 Mbps, nonton tayangan favorit
            dari..."
            img="https://subsystem.indihome.co.id/cms-ih/assets/uploads/promorec/disney_NHJM_Web_Mobile_Thumbnail_656px_x_578px.jpg"
          />
          <PromoCard
            title="Promo Paket IndiHome*"
            desc="Koneksi ngebut dan stabil IndiHome hadir dengan harga istimewa, lho! M..."
            img="https://subsystem.indihome.co.id/cms-ih/assets/uploads/promorec/NPD_Web_Desktop_Thumbnail_1168x1028.jpg"
          />
          <PromoCard
            title="Promo Spesial IndiHome"
            desc="Nikmati akses internet dengan kecepatan 30 Mbps dan bonus nelpon hingg..."
            img="https://subsystem.indihome.co.id/cms-ih/assets/uploads/promorec/Web_Desktop_Thumbnail_1168px_x_1028px_Paket_Akuisisi.jpg"
          />
          <PromoCard
            title="Paket IndiHome (Dengan Akses Netflix)"
            desc="Streaming semua tayangan di Netflix sepuasnya makin seru dengan intern..."
            img="https://subsystem.indihome.co.id/cms-ih/assets/uploads/promorec/bundling_Netflix_Web-Mobile-Thumbnail_656px-x-578px.png"
          />
          <PromoCard
            title="Paket IndiHome (Dengan Akses Disney+ Hotstar)"
            desc="Serunya internetan cepat hingga 300 Mbps, nonton tayangan favorit
            dari..."
            img="https://subsystem.indihome.co.id/cms-ih/assets/uploads/promorec/disney_NHJM_Web_Mobile_Thumbnail_656px_x_578px.jpg"
          />
          <PromoCard
            title="Promo Paket IndiHome*"
            desc="Koneksi ngebut dan stabil IndiHome hadir dengan harga istimewa, lho! M..."
            img="https://subsystem.indihome.co.id/cms-ih/assets/uploads/promorec/NPD_Web_Desktop_Thumbnail_1168x1028.jpg"
          />
        </div>
      </div>
    </Template>
  );
}
