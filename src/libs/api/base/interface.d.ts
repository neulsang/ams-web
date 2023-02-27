import { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';

export interface ApiAxiosRequestConfig extends AxiosRequestConfig {
  retry: boolean;
  queued: boolean;
}

export interface FailedQueue {
  resolve: (token: string | null) => void;
  reject: (error: AxiosError) => void;
}

export interface Api {
  isRefreshing: boolean;
  failedQueue: FailedQueue[];
  axios: AxiosInstance | null;
  createInstance: () => void;
  createQueryString: (queryObject: any) => string;
  shouldIntercept: (error: AxiosError) => boolean;
  setTokenData: (tokenData: string) => void;
  attachTokenToRequest: (
    request: AxiosRequestConfig,
    token: string | null,
  ) => void;
  processQueue: (error: AxiosError | null, token: string | null) => void;
  setResInterceptors: (axiosClient: AxiosInstance) => void;
  setReqInterceptors: (axiosClient: AxiosInstance) => void;
}

export interface TokenRefreshResponse {
  accessToken: string;
  bizSq: number;
  memberId: string;
  memberRoleSq: number;
  memberSq: number;
  message: string;
  roleCd: string;
}
