import { useState } from 'react';

import { MOBILE_DEVICES } from 'const';

import { useMountEffect } from './useMountEffect';

export const useMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useMountEffect(() => {
        setIsMobile(MOBILE_DEVICES.test(navigator.userAgent));
    });

    return isMobile;
};
