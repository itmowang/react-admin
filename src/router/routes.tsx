import { lazy } from "react";
import {RouteProps} from './route'

const routes: RouteProps[] = [
  {
    path: "/dashboard",
    component: lazy(() => import('@/pages/index/index')),
    isMenu: false,
    requiresAuth: true,
  },
  {
    path: "/login",
    component: lazy(() => import('@/pages/login/index')),
    isMenu: false,
    requiresAuth: true,
    title: "登录",
  },
  {
    path: "/user",
    component: lazy(() => import('@/pages/index/index')),
    isMenu: true,
    requiresAuth: true,
    title: "用户管理",
    children:[{
      path: "/login",
      component: lazy(() => import('@/pages/login/index')),
      isMenu: false,
      requiresAuth: true,
      title: "test",
    }]
  }
];

export default routes;
