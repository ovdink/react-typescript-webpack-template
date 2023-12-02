export function throttle(func: () => void, limit: number) {
    let inThrottle = false;

    return function (...arg: any): void {
        if (!inThrottle) {
            inThrottle = true;

            func.apply(arg[0], arg);
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

export const reactThrottle = (
    callback: () => void,
    time: number,
    isThrottle: boolean,
    setThrottle: (bool: boolean) => void,
) => {
    if (!isThrottle) {
        setThrottle(true);

        setTimeout(() => {
            callback();
            setThrottle(false);
        }, time);
    }
};
