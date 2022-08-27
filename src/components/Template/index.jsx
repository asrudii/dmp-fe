import {
  UserOutlined,
  LineChartOutlined,
  HomeOutlined,
  SearchOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Avatar } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import '../../assets/styles/template.css';

export default function Template({ children, defaultSelectedKeys }) {
  const [collapsed, setCollapsed] = useState(true);

  const { Header, Content, Footer, Sider } = Layout;

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
      <Link to="/user">User Management</Link>,
      '3',
      <UserOutlined style={{ fontSize: '20px' }} />
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
      </Sider>

      <Layout>
        {/* Navbar Top */}
        {/* <Header className="header">
          <Breadcrumb separator=">">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          </Breadcrumb>
          <div className="nav-topright">
            <div>
              <SearchOutlined className="icon-btn" />
              <BellOutlined className="icon-btn" />
            </div>
            <div className="nav-btn">
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <span>John Doe</span>
            </div>
          </div>
        </Header> */}

        <Content className="content">{children}</Content>
      </Layout>
    </Layout>
  );
}
