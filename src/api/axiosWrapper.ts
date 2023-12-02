import axios from 'axios';

import { config } from 'config';

// import { notification } from 'utils';
import Api from './Api';
import * as C from './const';

// const notifyErrors = (errors: Record<string, string>) =>
//     Object.values(errors).forEach((value) => notification.error(value));

const baseURL = config.apiURL;

/* for manual abort of request  */
const createCancelToken = () => axios.CancelToken.source();

export const sourceObject = {
    source: createCancelToken(),
};

const instanceOfAxios = axios.create({
    baseURL,
});

instanceOfAxios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

instanceOfAxios.interceptors.response.use(
    (response) => {
        if (response.status !== 200) {
            console.error('Status:', response.status);
        }

        // example for exclude: !response.config.url?.includes('/urlAddress')

        sourceObject.source = createCancelToken();

        return response;
    },

    async (error) => {
        if (axios.isCancel(error)) {
            sourceObject.source = createCancelToken();

            return;
        }

        const {
            // config,
            // response,
            response: { status },
        } = error;

        error.errorText = C.ERROR_NETWORK;

        switch (status) {
            case 504 || 502:
                error.errorText = C.ERROR_504_OR_502;
                break;

            case 500:
                error.errorText = C.ERROR_500;
                break;

            case 400:
                error.errorText = C.ERROR_400;
                break;

            case 404:
                error.errorText = C.ERROR_404;
                break;

            case 422:
            // notifyErrors(error.response?.data?.errors);

            case 429:
                error.errorText = C.ERROR_429;
        }

        if (status !== 401 && status !== 422 && status !== 409) {
            // notification.error(error.errorText);
        }

        return Promise.reject(error);
    },
);

export default new Api(instanceOfAxios);
