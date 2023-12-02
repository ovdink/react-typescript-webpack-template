import { RefObject, useEffect, useState } from 'react';

import { APPLE_DEVICES } from 'const';
import { useMountEffect } from 'hooks';

export const useFocusInput = (ref: RefObject<HTMLInputElement>, dependent?: boolean) => {
    const [isAppleDevice, setIsAppleDevice] = useState(false);

    useMountEffect(() => {
        setIsAppleDevice(APPLE_DEVICES.test(navigator.userAgent));
    });

    useEffect(() => {
        setTimeout(() => {
            !isAppleDevice && ref.current?.focus();
        }, 100);
    }, [ref?.current, dependent]);
};
