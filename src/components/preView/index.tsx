import { Button, Dropdown, Layout, Menu, theme } from "antd";
import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import "./index.less";

const { Header, Content, Sider } = Layout;

const Apps: React.FC<{Components:any}> = ({Components}) => {
  const [collapsed, setCollapsed] = useState(false);
  // redux 存储的用户信息
  const userStore = useSelector((state: any) => state);
  const { user, menuList } = userStore?.user;

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  interface MenuItems {
    label: React.ReactNode;
    key: React.Key;
    icon?: React.ReactNode;
    children?: MenuItems[];
    type?: "group";
  }

  // 菜单列表
  const [menuRoute, setMenuRoute] = useState<MenuItems[]>([]);
  
  // 首次加载处理
  useEffect(() => {
    setMenuRoute(menuList);
  }, []);
  
  // 用户下拉菜单
  const items = [{ label: "退出登录", key: "2" }];

  return (
    <Layout className="index-Layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          {!collapsed ? <h1>React Admin</h1> : <h1>R</h1>}
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={menuRoute}
        />
      </Sider>
      <Layout>
        <Header
          className="header"
          style={{ padding: 0, background: colorBgContainer }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <div className="header-r-user">
            <Dropdown menu={{ items }} placement="bottom" arrow>
              <div className="pic">
                <img src={user?.avatar} />
                <span className="userName"> {user?.name} </span>
              </div>
            </Dropdown>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
        <Components/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Apps;
