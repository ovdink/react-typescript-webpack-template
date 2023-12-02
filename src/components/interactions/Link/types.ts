import { ReactNode } from 'react';

export interface ILink {
    url: string;

    children?: ReactNode;

    isDefault?: boolean;
    isBlank?: boolean;
}
