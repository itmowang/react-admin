const menuData = [
    {
      id: 1,
      name: '首页',
      path: '/home'
    },
    {
      id: 2,
      name: '用户管理',
      path: '/user'
    },
    {
      id: 3,
      name: '订单管理',
      path: '/order'
    }
  ];


export default {
    getMenu: () => {
      return {
        code: 200,
        data: menuData
      };
    }
  };