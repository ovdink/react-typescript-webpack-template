import React, { createContext, FC, ReactNode } from 'react';
import { useLocalObservable } from 'mobx-react';

import { TestStore, ITestStore } from './TestStore';

interface IStoreContext {
    testStore: ITestStore;
}

export const StoreContext = createContext<IStoreContext>({} as IStoreContext);

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const testStore = useLocalObservable(TestStore);

    const stores = {
        testStore,
    };

    return <StoreContext.Provider value={stores}>{children}</StoreContext.Provider>;
};

export const useRootStore = () => {
    const rootStore = React.useContext(StoreContext);

    if (!rootStore) {
        throw new Error('useStore must be used within a StoreProvider');
    }

    return rootStore;
};
