import { useEffect, useState } from 'react';

import { mediaIntervals } from 'styles/media';

import { useWindowResize } from './useWindowResize';

const MOBILE_BREAKPOINT = mediaIntervals.mobile.max || 767;
const TABLET_BREAKPOINT = mediaIntervals.tablet.max || 1023;

enum DeviceType {
    MOBILE = 'MOBILE',
    TABLET = 'TABLET',
    DESKTOP = 'DESKTOP',
}

function getDeviceType(width: number): DeviceType {
    if (width <= MOBILE_BREAKPOINT) {
        return DeviceType.MOBILE;
    }

    if (width <= TABLET_BREAKPOINT) {
        return DeviceType.TABLET;
    }

    return DeviceType.DESKTOP;
}

export const useDeviceType = () => {
    const width = useWindowResize();

    const defaultDeviceType = getDeviceType(width);

    const [isMobile, setIsMobile] = useState<boolean>(defaultDeviceType === DeviceType.MOBILE);
    const [isTablet, setIsTablet] = useState<boolean>(defaultDeviceType === DeviceType.TABLET);
    const [isDesktop, setIsDesktop] = useState<boolean>(defaultDeviceType === DeviceType.DESKTOP);

    const setDeviceType = (deviceType: DeviceType) => {
        setIsMobile(deviceType === DeviceType.MOBILE);
        setIsTablet(deviceType === DeviceType.TABLET);
        setIsDesktop(deviceType === DeviceType.DESKTOP);
    };

    useEffect(() => {
        const deviceType = getDeviceType(width);

        setDeviceType(deviceType);
    }, [width]);

    return {
        isMobile,
        isTablet,
        isDesktop,
    };
};
