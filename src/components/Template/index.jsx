import {
  HomeOutlined,
  LineChartOutlined,
  PullRequestOutlined,
  MenuOutlined,
  SettingOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import '../../assets/styles/template.css';

export default function Template({ children, defaultSelectedKeys }) {
  const [collapsed, setCollapsed] = useState(true);

  const { Content, Sider } = Layout;

  const menuSidebar = [
    getItem(
      <Link to="/">Dashboard</Link>,
      '1',
      <HomeOutlined style={{ fontSize: '20px' }} />
    ),
    getItem(
      <Link to="/analysis">Analytics</Link>,
      '2',
      <LineChartOutlined style={{ fontSize: '20px' }} />
    ),
    getItem(
      <Link to="/product/promo">Product Comparisons</Link>,
      '3',
      <PullRequestOutlined style={{ fontSize: '20px' }} />
    ),
  ];

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  return (
    <Layout className="container">
      {/* Navbar Left */}
      <Sider
        theme="light"
        className="sidebar"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <Menu
          defaultSelectedKeys={[defaultSelectedKeys]}
          mode="inline"
          items={menuSidebar}
        />
        <div className={`bottom-menu ${collapsed ? 'menu-collapsed' : null}`}>
          {collapsed ? (
            <>
              <MenuOutlined
                style={{ fontSize: '20px' }}
                onClick={() => setCollapsed(false)}
              />
              <SettingOutlined style={{ fontSize: '20px' }} />
              <img
                src="https://miro.medium.com/max/1080/0*qlXcicyCge0iJe-q.jpg"
                alt="user"
                className="img-user"
              />
            </>
          ) : (
            <>
              <button className="group-menu" onClick={() => setCollapsed(true)}>
                <CloseOutlined style={{ fontSize: '20px' }} />
                <span>Collapse Sidebar</span>
              </button>
              <button className="group-menu">
                <SettingOutlined style={{ fontSize: '20px' }} />
                <span>Settings</span>
              </button>
              <button className="group-menu">
                <img
                  src="https://miro.medium.com/max/1080/0*qlXcicyCge0iJe-q.jpg"
                  alt="user"
                  className="img-user"
                />
                <span>Jane Cooper</span>
              </button>
            </>
          )}
        </div>
      </Sider>

      <Layout>
        <Content className="content">{children}</Content>
      </Layout>
    </Layout>
  );
}
