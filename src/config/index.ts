import { development, Environment, production, stage } from './config';

const getConfig = () => {
    switch (process.env.REACT_APP_ENV) {
        case Environment.PRODUCTION:
            return production;
        case Environment.STAGE:
            return stage;
        default:
            return development;
    }
};

export const config = getConfig();
