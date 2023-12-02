import { Undefinable } from 'types/common';

export const getStorage = (
    key: string,
    isObject = false,
    storage = localStorage,
): Undefinable<string | Record<string, any>> => {
    if (key in storage) {
        return isObject ? JSON.parse(storage.getItem(key) as string) : storage.getItem(key);
    }
};

export const persistStorage = (
    key: string,
    value: string | Record<string, any>,
    isObject = false,
    storage = localStorage,
): void => {
    isObject ? storage.setItem(key, JSON.stringify(value)) : storage.setItem(key, value as string);
};

export const removeItemStorage = (key: string, storage = localStorage) => {
    if (key in storage) {
        storage.removeItem(key);
    } else {
        throw new Error('Данный ключ не найден в storage');
    }
};

export const clearStorage = (storage = localStorage) => {
    storage.clear();
};
