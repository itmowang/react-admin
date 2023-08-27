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
            data: {},
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
            data: {},
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
