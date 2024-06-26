import white from "./white";
import { RouteProps } from "./route";

// 检查路由权限   通过后端返回path 匹配是否有当前的权限
export const checkAuth = (route: RouteProps,menuAll:any,user:any): string => {
  // 先检查白名单 如果有就为正常访问
  if (white.some((ite: string) => ite == route.path)) {
    return "200";
  } else {
    // 进行用户权限检查
    const userRoleFlag = menuAll?.some((ite: any) => {
      return (
        ite.path === route.path &&
        ite.role.some((item: any) => item == user.role)
      );
    });
    if (userRoleFlag) {
      // 否则就进行路由权限匹配
      const routeIsNull = menuAll?.some(
        (item: { path: string | undefined }) => item.path == route.path
      );
      if (routeIsNull) {
        return "200";
      } else {
        return "404";
      }
    } else {
      return "401";
    }

  }
};
