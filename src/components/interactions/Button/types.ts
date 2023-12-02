import { ButtonHTMLAttributes, ReactElement } from 'react';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean;
    size?: 'normal' | 'small';
    icon?: ReactElement;
    styleScheme?: 'primary' | 'outline' | 'transparent';
}

export interface ICircleButton extends IButton {}
