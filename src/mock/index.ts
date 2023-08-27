import Mock from "mockjs";

// 模拟登录返回 管理员用户和普通用户
export const loginMock = (data: any) => {
  const { username, password } = data;
  if (username === "admin" && password === "123456") {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          Mock.mock({
            code: 200,
            message: "登录成功",
            data: {
              token: "admin-token",
              userInfo: {
                username: "admin",
                avatar: "https://avatars.githubusercontent.com/u/20942571?v=4",
                email: "123@qq.com"
              }
                
            },
          })
        );
      }, 1000); // 模拟延迟1秒钟
    });
  } else if (username === "user" && password === "123456") {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          Mock.mock({
            code: 200,
            message: "登录成功",
            data: {
              username: "user",
              avatar: "https://avatars.githubusercontent.com/u/20942571?v=4",
              email: "123@qq.com"
            },
          })
        );
      }, 1000); // 模拟延迟1秒钟
    });
  }else{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          Mock.mock({
            code: 400,
            message: "用户名或密码错误",
            data: {},
          })
        );
      }, 1000); // 模拟延迟1秒钟
    });
  }
};


// 模拟返回菜单列表接口并带上权限
export const getMenuMock = (data:any) => {
  Mock.mock('/api/menu', 'post', {
    code: 200,
    message: '获取菜单列表成功',
    data: {
      menuList: [
        {
          id: 1,
          name: '菜单1',
          permission: 'admin,user' // 根据实际情况修改
        },
        {
          id: 2,
          name: '菜单2',
          permission: 'admin,user' // 根据实际情况修改
        }, 
      ]
    }
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Mock.mock({
        code: 200,
        message: '获取菜单列表成功',
        data: {
          menuList: [
            {
              id: 1,
              name: '菜单1',
              permission: 'admin,user' // 根据实际情况修改
            },
            {
              id: 2,
              name: '菜单2',
              permission: 'admin,user' // 根据实际情况修改
            }, 
          ]
        }
      }));
    }, 1000); // 模拟延迟1秒钟
  });
}