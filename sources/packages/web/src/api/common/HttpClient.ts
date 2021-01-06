import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import Vue from 'vue';

const axiosConfig: AxiosRequestConfig = { timeout: 10000 };
axiosConfig.baseURL = "http://localhost:3000/";
const axiosSharedInstance: AxiosInstance = axios.create(axiosConfig);
axiosSharedInstance.interceptors.request.use(cfg => {
  if (Vue.prototype.$keycloak &&
    Vue.prototype.$keycloak.ready &&
    Vue.prototype.$keycloak.authenticated) {
    cfg.headers.Authorization = `Bearer ${Vue.prototype.$keycloak.token}`;
  }
  return Promise.resolve(cfg);
}, error => {
  return Promise.reject(error);
});

export default axiosSharedInstance;