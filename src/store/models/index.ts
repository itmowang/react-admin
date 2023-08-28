
import { menuMock } from '@/api/api';
import {message} from 'antd'


export const user = {
  state: {
    user: null,
    loading: false,
    menuList: [],
    aa:123132132
  },
  reducers:{
    setUser(state: any,payload: any){
      return {...state,user:payload}
    }
  },
  effects:(dispatch: any)=>({
    async fetchMenu(){
      try{
        const res  =  await menuMock({}) as any;
        console.log(res);
        
        if(res.code===200){
          dispatch.user.setUser(res.data.menuList)
        }
      }catch{
        message.error("error,menuMock")
      }
    }
  })
};
