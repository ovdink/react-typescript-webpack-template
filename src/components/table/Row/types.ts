import { TableHTMLAttributes } from 'react';

export interface IRow extends TableHTMLAttributes<HTMLTableRowElement> {
    withBackground?: boolean;
    isHeader?: boolean;
    size?: 'small' | 'normal' | 'huge';
}
