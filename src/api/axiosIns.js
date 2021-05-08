import { message } from 'ant-design-vue';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:12306',
  timeout: 1000,
});

// 请求拦截器
instance.interceptors.request.use((config) => {
  // 添加token
  if (config.url.includes('sentence') || config.url.includes('blog')) {
    if (config.method === 'get') {
      return {
        ...config,
        params: {
          ...config.params,
          appkey: localStorage.getItem('token'),
        },
      };
    } if (config.method === 'post') {
      return {
        ...config,
        data: {
          ...config.data,
          appkey: localStorage.getItem('token'),
        },
      };
    }
  }
  return config;
}, (error) => {
  message.error(error);
});

// 响应拦截器
instance.interceptors.response.use((response) => {
  const { status, statusText } = response;
  if (status === 200 && statusText === 'OK') {
    return response.data;
  }
  return response;
}, (error) => {
  message.info(error);
});

export default instance;
