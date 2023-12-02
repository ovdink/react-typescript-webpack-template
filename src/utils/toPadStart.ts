export const toPadStart = (string: string | number, length = 2, fillString = '0'): string => {
    return string.toString().padStart(length, fillString);
};
