import React,{useState} from 'react';
import "../resources/DefaultLayout.css"
import { Layout, Menu } from 'antd';
import {HomeOutlined ,
  CopyOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LoginOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Sider, Content,Footer } = Layout;

const DefaultLayout =(props)=> {
  const [collapsed,setCollapsed] =useState(false)

  const toggle = () => {
    setCollapsed(!collapsed)
  };
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo"><h3>POS Application</h3></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={window.location.pathname}>
            <Menu.Item key='/' icon={<HomeOutlined />}>
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key='/bills' icon={<CopyOutlined />}>
              <Link to="/bills">Bills</Link>
            </Menu.Item>
            <Menu.Item key='/items' icon={<UnorderedListOutlined />}>
              <Link to="/items">Items</Link>
            </Menu.Item>
            <Menu.Item key='/customer' icon={<UserOutlined />}>
              <Link to="/customers">Customers</Link>
            </Menu.Item>
            <Menu.Item key='/logout' icon={<LoginOutlined />}>
              <Link to="/logout">Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              fontSize: 20,
              minHeight: 280,
              
            }}
          >
           {props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>©{new Date().getFullYear()} AllRight Reserved ,POS Application designed and Developed by Habibur Rahman</Footer>
        </Layout>
      </Layout>
    );
  
}
export default DefaultLayout;