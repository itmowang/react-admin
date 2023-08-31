import axios from "./config/request";
// 模拟登录
export const login = (data: any) => {
  return axios({
    url: "/login",
    method: "post",
    data,
  });
};

// 模拟获取菜单
export const menuMock = (data:any)=>{
  return axios({
    url: "/getMenu",
    method: "get",
    data,
  });
}
