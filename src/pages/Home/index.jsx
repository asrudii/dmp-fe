import { SearchOutlined } from '@ant-design/icons';
import { FaRegBell } from 'react-icons/fa';
import Template from '../../components/Template';
import DashboardHeader from '../../components/DashboardHeader';
import Button from '../../components/Button';
import '../../assets/styles/dashboard.css';
import DashboardCard from '../../components/DashboardCard';

export default function Home() {
  return (
    <Template defaultSelectedKeys="1">
      <DashboardHeader />
      <div className="title-wrap">
        <div>
          <h2>Daftar Produk</h2>
          <FaRegBell size={24} color="#BC1414" />
        </div>
        <Button title="Filter Produk" />
      </div>
      <div className="content-wrap">
        <DashboardCard
          name="Indihome"
          company="PT Telkom Indonesia (Persero) Tbk"
          img="https://1.bp.blogspot.com/-kBYPbKEb0ag/X2YQG3QLB5I/AAAAAAAAbQ4/QxDKDjjNxOoEJJePR_sIuLC7orzETCCtgCLcBGAsYHQ/s0/logo-indihome-png.png"
        />
        <DashboardCard
          name="Biznet Network"
          company="PT Supra Primatama Nusantara"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Biznet_Home_Logo.svg/2560px-Biznet_Home_Logo.svg.png"
        />
        <DashboardCard
          name="First Media"
          company="Lippo Group"
          img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/First_Media_logo.svg/1200px-First_Media_logo.svg.png"
        />
        <DashboardCard
          name="MyRepublic"
          company="PT Eka Mas Republik"
          img="https://myrepublic.co.id/wp-content/themes/myrepublic/assets/images/icon/MyRepublic-NEW-LOGO-Juni-2022_Logo-Landscape-Abu-Abu.png"
        />
      </div>
    </Template>
  );
}
