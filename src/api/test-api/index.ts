import Api from 'api/axiosWrapper';
import { API_PATH } from 'api/env';

export const getTest = () => {
    return Api.get({
        url: `${API_PATH}/test`,
        params: {},
    });
};
