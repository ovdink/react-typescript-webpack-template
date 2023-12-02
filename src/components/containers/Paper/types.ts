import { ButtonHTMLAttributes } from 'react';

export interface IPaper extends ButtonHTMLAttributes<HTMLDivElement> {
    isRounded?: boolean;
}
