import { Dispatch, SetStateAction } from 'react';

import * as CONST from 'const';

import { sortTable } from './sortTable';

export const tableSortHandler = <T>(
    sortArray: T[],
    sortInfo: {
        sortType: string;
        sortColumn: keyof T;
    },
    setSortInfo: (value: { sortType: string; sortColumn: keyof T }) => void,
    setSortedTable: Dispatch<SetStateAction<T[]>>,
    newSortItem: keyof T,
    newSortType?: string,
) => {
    const sortType =
        typeof newSortType === 'string'
            ? newSortType
            : sortInfo.sortColumn === newSortItem
            ? sortInfo.sortType === CONST.ASC
                ? CONST.DESC
                : sortInfo.sortType === CONST.DESC
                ? ''
                : CONST.ASC
            : CONST.ASC;

    setSortInfo({
        sortType,
        sortColumn: newSortItem,
    });

    setSortedTable(
        sortType === CONST.ASC
            ? sortArray.slice().sort((a, b) => sortTable(a, b, CONST.ASC, newSortItem))
            : sortType === CONST.DESC
            ? sortArray.slice().sort((a, b) => sortTable(a, b, CONST.DESC, newSortItem))
            : sortArray,
    );
};
