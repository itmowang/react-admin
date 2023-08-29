import { MenuParam } from "./mock";

const menuData = [
  {
    id: 1,
    name: '首页',
    path: '/home',
    parentId: null
  },
  {
    id: 2,
    name: '用户管理',
    path: '/user',
    parentId: null
  },
  {
    id: 3,
    name: '订单管理',
    path: '/order',
    parentId: null
  },
  {
    id: 4,
    name: '用户列表',
    path: '/user/list',
    parentId: 2
  },
  {
    id: 5,
    name: '添加用户',
    path: '/user/add',
    parentId: 2
  },
  {
    id: 6,
    name: '订单列表',
    path: '/order/list',
    parentId: 3
  },
  {
    id: 7,
    name: '添加订单',
    path: '/order/add',
    parentId: 3
  }
];


const buildMenu = (menuItems:MenuParam[],parent:number=0)=>{
  const result = []
  menuItems.forEach(item=>{

  })
}



// 如果有二级的话递归成我想要的父子级关系的树结构



export default {
    getMenu: () => {
      return {
        code: 200,
        data: menuData
      };
    }
  };