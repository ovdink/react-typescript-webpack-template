import { useEffect } from 'react';

// что-то сработает через определенное время (можно передать зависимость)
export const useInterval = (cb: () => (() => void) | void, delay: number, dependence?: boolean) => {
    useEffect(() => {
        const interval = setInterval(cb, delay);

        return () => {
            clearInterval(interval);
        };
    }, [dependence]);
};
