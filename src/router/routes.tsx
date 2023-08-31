import { lazy } from "react";
import { RouteProps } from "./route";

const routes: RouteProps[] = [
  {
    path: "/index",
    component: lazy(() => import("@/pages/dashboard/index")),
    isMenu: false,
    requiresAuth: true,
    children: [
      {
        path: "/user",
        component: lazy(() => import("@/pages/user/index")),
        isMenu: true,
        requiresAuth: true,
        title: "用户管理",
      },
    ],
  },
  {
    path: "/auth",
    component: lazy(() => import("@/pages/auth/user")),
    isMenu: true,
    requiresAuth: true,
    title: "权限管理",
    children: [
      {
        path: "/user",
        component: lazy(() => import("@/pages/auth/user")),
        isMenu: true,
        requiresAuth: true,
        title: "普通用户权限",
      },
      {
        path: "/edit",
        component: lazy(() => import("@/pages/auth/edit")),
        isMenu: true,
        requiresAuth: true,
        title: "编辑者权限",
      },
      {
        path: "/admin",
        component: lazy(() => import("@/pages/auth/admin")),
        isMenu: true,
        requiresAuth: true,
        title: "管理员权限",
      },
    ],
  },
  {
    path: "/login",
    component: lazy(() => import("@/pages/login/index")),
    isMenu: false,
    requiresAuth: true,
    title: "登录",
  },
];

export function flattenRoutes(
  routes: RouteProps[],
  parentPath = ""
): RouteProps[] {
  let flattenedRoutes: RouteProps[] = [];
  routes.forEach((route) => {
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
