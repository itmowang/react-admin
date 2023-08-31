import { Button, Dropdown, Layout, Menu, Modal, message, theme } from "antd";
import React, { useEffect, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import "./index.less";

const { Header, Content, Sider } = Layout;

const Apps: React.FC<{Components:any}> = ({Components}) => {
  const [collapsed, setCollapsed] = useState(false);
  // redux 存储的用户信息
  const userStore = useSelector((state: any) => state);
  const { user, menuList } = userStore?.user;
  console.log(menuList);
  
  // dispatch
  const dispatch = useDispatch();
  // reactRouter
  const navigator = useNavigate();
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
  // const [menuRoute, setMenuRoute] = useState<MenuItems[]>([]);
  // Modal
  const { confirm } = Modal;

  // 首次加载处理
  // useEffect(() => {
  //   setMenuRoute(menuList);
  // }, []);

  // 退出登录
  const exit = ()=>{
    confirm({
      title: '真的要退出登录吗?',
      content: '退出就退出吧，我无所谓的！',
      onOk() {
        message.success("用户退出登录")
        dispatch.user.fetchLoginOut()
        navigator('/')
      },
      onCancel() {
        message.info("用户取消退出登录")
      },
    });
    
  }
  
  // 用户下拉菜单
  const items = [{ label: "退出登录", key: "1", onClick:()=>exit()}];

  // 跳转页面
  const menuTo  = (menu:any)=>{
    const path = menu.props?.path
    navigator(path)
  }

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
          items={menuList}
          onClick={({ item, key, keyPath, domEvent })=> menuTo(item)}
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
            <Dropdown menu={{ items }} placement="bottom"  arrow>
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
