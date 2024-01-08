import Axios, { InternalAxiosRequestConfig } from "axios";
import storage from "app/_utils/storage";
import { env } from "env.mjs";

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  const token = storage.getStorage('@user_token');

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }
  config.headers.Accept = 'application/json';
  config.headers['api-key'] = env.NEXT_PUBLIC_API_KEY;

  return config;
}

export const axios = Axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const { status, statusText, data } = error.response;

    if (status === 401) {
      window.location.href = "/";
      return;
    }

    return Promise.reject({ error: true, status, statusText, data });
  }
);

