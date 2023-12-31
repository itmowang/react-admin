import { menuMock } from "@/api/api";
import { message } from "antd";

export const user = {
  state: {
    user: null,
    loading: false,
    isLogin: false,
    menuList: [],
    menuAll: [],
  },

  reducers: {
    setUser(state: any, payload: any) {
      return { ...state, user: payload, isLogin: true };
    },
    setMenu(state: any, payload: any) {
      return { ...state, menuList: payload };
    },
    setToken(state: any, payload: any) {
      return { ...state, token: payload };
    },
    setMenuAll(state: any, payload: any) {
      return { ...state, menuAll: payload };
    },
    setLoginOut(state: any, payload: any) {
      return {};
    },
  },
  effects: (dispatch: any) => ({
    async fetchMenu() {
      try {
        const res = (await menuMock({})) as any;
        if (res.code === 200) {
          dispatch.user.setMenu(res.data.menuList);
          dispatch.user.setMenuAll(res.data.menuAll);
        }
      } catch {
        message.error("error , menuMock");
      }
    },
    fetchLoginOut() {
      try {
        dispatch.user.setLoginOut();
      } catch {
        message.error("error , loginOut");
      }
    },
  }),
};
