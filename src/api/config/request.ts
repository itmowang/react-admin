import axios from "axios";
import { message } from "antd";

const API_BASE_URL = "/api";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

axiosInstance.interceptors.request.use((config) => {
  // 在请求发送之前做一些处理，比如添加token等
  return config;
});

axiosInstance.interceptors.response.use(
  (response: any) => {
    // 在响应成功返回之前做一些处理
    return response;
  },
  (error) => {
    if(error.response.status === 400){
      message.error(error.response.data.msg);
      Promise.reject({message:error.response.data});
    }
    if (error.response.status === 401) {
      message.error(error.response.data.msg);
      Promise.reject({message:error.response.data});
    }
    if (error.response.status === 403) {
      message.error(error.response.data.msg);
      Promise.reject({message:error.response.data});
    }
    if (error.response.status === 404) {
      message.error(error.response.data.msg);
      Promise.reject({message:error.response.data});
    }
    if (error.response.status === 500) {
      message.error(error.response.data.msg);
      Promise.reject({message:error.response.data});
    }
    if (error.response.status === 503) {
      message.error(error.response.data.msg);
      Promise.reject({message:error.response.data});
    }
    // 在响应错误返回之前做一些处理
    return Promise.reject(error);
  }
);
export default axiosInstance;
