import axios from "./config/request";
import {loginMock} from '@/mock/index'
// 模拟登录
export const login = (data: any) => {
  return loginMock(data) as any
};




