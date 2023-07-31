import axios from "axios";
import Router from "next/router";
import LocalStorage from "@/utils/localStorage";
import { Console } from "./console";

type Params = {
  [key: string]: unknown;
};

export const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API_URL;
export const errorHandle = {
  callback: (v: boolean) => {},
};

export const api = {
  get: <T>(url: string, params?: Params) =>
    axios.get<T>(baseUrl + url, { params: { ...params } }),
  post: <T, R = unknown, E = unknown>(url: string, data?: R, headers?: E) =>
    axios.post<T>(baseUrl + url, data || {}, { ...headers }),
  put: <T, R = unknown>(url: string, data?: R) =>
    axios.put<T>(baseUrl + url, data || {}),
  delete: <T>(url: string) => axios.delete<T>(baseUrl + url),
};

axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response.status === 401) {
      LocalStorage.removeItem("accessToken");
      Router.push("/auth/login");
    }

    return Promise.reject(error.response.data);
  }
);

axios.interceptors.request.use(function(config: any) {
  if (
    config.url.indexOf("/auth/login") > -1 ||
    config.url.indexOf("/signup") > -1
  )
    return config;
  config.headers = {
    Authorization: LocalStorage.getItem("accessToken") || "",
  };
  return config;
});
