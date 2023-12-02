import { AxiosRequestConfig } from 'axios';

export type CustomAxiosRequestConfig = Omit<AxiosRequestConfig, 'method'>;
