import { message } from 'ant-design-vue';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:12306',
  timeout: 1000,
  // headers: { 'Content-Type': 'application/json;charset=utf-8' },
});

// instance.interceptors.request.use((config) => {

// }, (error) => {

// });

// 响应拦截器
instance.interceptors.response.use((response) => {
  const { status, statusText } = response;
  if (status === 200 && statusText === 'OK') {
    return response.data;
  }
  return response;
}, (error) => {
  message.error(error);
});

// 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么
//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// 添加响应拦截器
// axios.interceptors.response.use(function (response) {
//   // 对响应数据做点什么
//   return response;
// }, function (error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });

export default instance;
