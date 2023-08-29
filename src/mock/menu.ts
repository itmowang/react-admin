import { MenuParam } from "./mock";

const menuData = [
  {
    id: 1,
    name: "仪表盘",
    path: "/dashboard",
    parentId: null,
  },
  {
    id: 2,
    name: "用户管理",
    path: "/user",
    parentId: null,
  },
  {
    id: 3,
    name: "订单管理",
    path: "/order",
    parentId: null,
  },
  {
    id: 4,
    name: "用户列表",
    path: "/user/list",
    parentId: 2,
  },
  {
    id: 5,
    name: "添加用户",
    path: "/user/add",
    parentId: 2,
  },
  {
    id: 6,
    name: "订单列表",
    path: "/order/list",
    parentId: 3,
  },
  {
    id: 7,
    name: "添加订单",
    path: "/order/add",
    parentId: 3,
  },
];

// 如果有二级的话递归成我想要的父子级关系的树结构
const generateMenu = (
  menuData: MenuParam[],
  parentId: number | null = null
): MenuParam[] => {
  const menuList: MenuParam[] = [];
  for (const menu of menuData) {
    if (menu.parentId === parentId) {
      const children = generateMenu(menuData, menu.id);
      if (children.length > 0) {
        menu.children = children;
      }
      menuList.push({ ...menu, label: menu.name,key:`${menu.id}` });
    }
  }
  return menuList;
};

export default {
  getMenu: () => {
    return {
      code: 200,
      data: {
        menuList:generateMenu(menuData as any),
        menuAll:menuData
      },
    };
  },
};
