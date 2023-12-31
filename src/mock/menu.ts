import { MenuParam } from "./mock";

const menuData = [
  {
    id: 1,
    name: "仪表盘",
    path: "/index",
    role:['admin','editor','guest'],
    parentId: null,
  },
  {
    id: 2,
    name: "用户管理",
    path: "",
    role:['admin','editor','guest'],
    parentId: null,
  },
  {
    id: 3,
    name: "权限测试",
    path: "",
    role:['admin','editor','guest'],
    parentId: null,
  },
  {
    id: 4,
    name: "用户列表",
    role:['admin','editor','guest'],
    path: "/index/user",
    parentId: 2,
  },
  {
    id: 6,
    name: "管理员权限",
    role:['admin'],
    path: "/auth/admin",
    parentId: 3,
  },
  {
    id: 7,
    name: "编辑者权限",
    role:['admin','editor'],
    path: "/auth/edit",
    parentId: 3,
  },
  {
    id: 8,
    name: "普通用户权限",
    role:['admin','editor','guest'],
    path: "/auth/user",
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
      menuList.push({ ...menu, label: menu.name,key:`${menu.id}`,role:menu.role });
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
