
import { menuMock } from '@/api/api';
import {message} from 'antd'

export const user = {
  state: {
    user: null,
    loading: false,
    isLogin:false,
    menuList: [],
  },
  reducers:{
    setUser(state: any,payload: any){
      return {...state,user:payload,isLogin:true}
    }
  },
  effects:(dispatch: any)=>({
    async fetchMenu(){
      try{
        const res =  await menuMock({}) as any;
        if(res.code===200){
          dispatch.user.setUser(res.data)
        }
      }catch{
        message.error("error , menuMock")
      }
    }
  })
};
