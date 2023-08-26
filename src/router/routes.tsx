import { lazy } from "react";

export interface RouteProps {
  component?: any; // 路由组件
  requiresAuth?: boolean; // 是否需要登录才能访问
  requiresAdmin?: boolean; // 是否需要管理员权限才能访问
  isMenu: boolean;
  title?: string; // 路由标题
  path?: string; // 路由路径
  children?: RouteProps[]; // 子路由配置
}

const routes: RouteProps[] = [
  {
    path: "/",
    component:import(`../pages/index/index`) ,
    isMenu: false,
    requiresAuth: true,
  },
  {
    path: "/login",
    component: import(`../pages/login`),
    isMenu: false,
    requiresAuth: true,
    title: "登录",
  },
];

export default routes;
