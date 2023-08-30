import { useSelector } from "react-redux";
import white from "./white";
import { RouteProps } from "./route";

// 检查路由权限   通过后端返回path 匹配是否有当前的权限
export const checkAuth = (route: RouteProps): boolean => {
  const userStore = useSelector((state: any) => state);
  const { menuAll } = userStore?.user;
  // 先检查白名单 如果有就为正常访问
  if (white.some((ite: string) => ite == route.path)) {
    return true;
  } else {
    // 否则就进行路由权限匹配
    return menuAll?.some(
      (item: { path: string | undefined }) => item.path == route.path
    );
  }
};

