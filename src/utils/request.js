import axios from 'axios';

const service = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.error(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 对响应错误做点什么
    console.error(error);
    return Promise.reject(error);
  }
);

export default service;
