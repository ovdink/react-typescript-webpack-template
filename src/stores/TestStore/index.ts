import { ITestStore } from './types';
export * from './types';

export const TestStore = (): ITestStore => {
    return {
        test: false,

        setTest(bool) {
            this.test = bool;
        },
    };
};
