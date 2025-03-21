import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content } = Layout;

const items = [
  { key: '1', label: <Link to="/">首页</Link> },
  { key: '2', label: <Link to="/test">测试</Link> },
  { key: '3', label: <Link to="/contact">联系我们</Link> },
];

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}> {/* 设置 Layout 高度为视口高度 */}
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ flex: 1, padding: '24px' }}> {/* 设置 flex: 1 占满剩余空间 */}
        <Outlet /> {/* 这里是当前路由对应的页面内容 */}
      </Content>
    </Layout>
  );
};

export default App;