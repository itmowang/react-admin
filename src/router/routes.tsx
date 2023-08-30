import { lazy } from "react";
import {RouteProps} from './route'

const routes: RouteProps[] = [
  {
    path: "/index",
    component: lazy(() => import('@/pages/dashboard/index')),
    isMenu: false,
    requiresAuth: true,
    children:[
      {
        path: "/user",
        component: lazy(() => import('@/pages/user/index')),
        isMenu: true,
        requiresAuth: true,
        title: "用户管理"
      }
    ]
  },
  {
    path: "/login",
    component: lazy(() => import('@/pages/login/index')),
    isMenu: false,
    requiresAuth: true,
    title: "登录",
  }
];

 export function flattenRoutes(routes: RouteProps[], parentPath = ''): RouteProps[] {
  let flattenedRoutes: RouteProps[] = [];

  routes.forEach(route => {
    const path = `${parentPath}${route.path}`;
    const flattenedRoute = { ...route, path };
    flattenedRoutes.push(flattenedRoute);

    if (route.children) {
      const childrenRoutes = flattenRoutes(route.children, path);
      flattenedRoutes = flattenedRoutes.concat(childrenRoutes);
    }
  });

  return flattenedRoutes;
}

export default routes;
