import { TdHTMLAttributes } from 'react';

export interface ICell extends TdHTMLAttributes<HTMLTableCellElement> {
    hintText?: string | React.ReactElement;
    sortType?: string;
    elementType?: 'th' | 'td';
    position?: 'start' | 'end' | 'center';
    isExpand?: boolean;
    isSort?: boolean;
    withPadding?: boolean;
    isSortable?: boolean;
    width?: number;

    sort?: () => void;
}
