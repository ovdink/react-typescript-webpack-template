import { MutableRefObject } from 'react';

export const scrollIntoView = (
    ref: MutableRefObject<any>,
    porisition: 'start' | 'end' = 'start',
) => {
    if (ref.current) {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: porisition,
        });
    }
};
