import Mock from "mockjs";
import loginAPI from './login'
import menuAPI from './menu'
 
// 登录与用户相关
Mock.mock(/\/login/, "post", loginAPI.login);


// 获取菜单
Mock.mock(/\/getMenu/,'get',menuAPI.getMenu)

export default Mock;