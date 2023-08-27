
import { menuMock } from '@/api/api';


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
        if(res.code===200){
          dispatch.user.setUser(res.data.menuList)
        }
      }catch{
        console.log('error,menuMock');
      }
    }
  })
};
