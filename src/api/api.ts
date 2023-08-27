import axios from "./config/request";
import {loginMock,getMenuMock} from '@/mock/index'
// 模拟登录
export const login = (data: any) => {
  return loginMock(data)
};

// 模拟获取菜单
export const menuMock = (data:any)=>{
    return getMenuMock(data);
}


