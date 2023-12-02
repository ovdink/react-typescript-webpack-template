export const debounce = <T extends (...arg: any[]) => void>(cb: T, wait = 20) => {
    let h: NodeJS.Timeout;

    const callable = (...args: any[]): void => {
        clearTimeout(h);

        h = setTimeout(() => cb(...args), wait);
    };

    return <T>(<any>callable);
};
