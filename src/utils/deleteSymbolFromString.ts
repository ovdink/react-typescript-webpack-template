export const deleteSymbolFromString = (value: string, symbol: string) => {
    return value.replaceAll(symbol, '');
};
