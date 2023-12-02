import { useEffect, useState } from 'react';

export const useWindowResize = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    const onResize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return width;
};
