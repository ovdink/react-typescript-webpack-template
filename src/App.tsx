import { NavigationRouter } from 'router';
import { StoreProvider } from 'stores/initStore';

export const App = () => {
    return (
        <StoreProvider>
            <NavigationRouter />
        </StoreProvider>
    );
};
