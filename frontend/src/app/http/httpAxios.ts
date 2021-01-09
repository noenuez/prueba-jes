import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

export function promiseWith<T>(data: any) {
  return new Promise<T>((resolve) => resolve(data));
}
export const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

export class HttpAxios {
  service: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    const service = axios.create(config);
    service.defaults.withCredentials = true;
    this.service = service;
  }

  async get<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.service.get<T>(path, config);
    return promiseWith<T>(response.data);
  }

  async patch<T>(path: string, payload: any): Promise<T> {
    const response = await this.service.patch<T>(path, payload);
    return promiseWith<T>(response.data);
  }

  async post<T>(path: string, payload: any): Promise<T> {
    const response = await this.service.post<T>(path, payload);
    return promiseWith(response.data);
  }

  async postCfg<T>(path: string, payload: any, config: any): Promise<T> {
    const response = await this.service.post<T>(path, payload, config);
    return promiseWith(response.data);
  }

  async put<T>(path: string, payload: any): Promise<T> {
    const response = await this.service.put<T>(path, payload);
    return promiseWith<T>(response.data);
  }

  async delete<T>(path: string): Promise<T> {
    const response = await this.service.delete<T>(path);
    return promiseWith<T>(response.data);
  }
}
