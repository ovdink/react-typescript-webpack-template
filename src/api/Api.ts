import { AxiosInstance } from 'axios';

import { CustomAxiosRequestConfig } from './types';

export default class Api {
    axiosInstance: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.axiosInstance = axiosInstance;
    }

    get(config: CustomAxiosRequestConfig) {
        return this.axiosInstance({ ...config, method: 'GET' });
    }

    post(config: CustomAxiosRequestConfig) {
        return this.axiosInstance({ ...config, method: 'POST' });
    }

    delete(config: CustomAxiosRequestConfig) {
        return this.axiosInstance({ ...config, method: 'DELETE' });
    }

    put(config: CustomAxiosRequestConfig) {
        return this.axiosInstance({ ...config, method: 'PUT' });
    }

    patch(config: CustomAxiosRequestConfig) {
        return this.axiosInstance({ ...config, method: 'PATCH' });
    }
}
