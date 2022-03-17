import React from 'react';
import "./DefaultLayout.css"
import { Layout, Menu } from 'antd';
import {HomeOutlined ,
  CopyOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  LoginOutlined,
  UploadOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

class DefaultLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
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
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              fontSize: 20,
              minHeight: 280,
              
            }}
          >
           {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default DefaultLayout;