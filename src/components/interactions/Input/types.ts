import { ChangeEvent, FocusEvent, HTMLInputTypeAttribute } from 'react';

export interface IInput {
    value: string;
    isError?: boolean;
    errorText?: string;
    type?: HTMLInputTypeAttribute;
    label?: string;
    disabled?: boolean;
    inputProps?: Record<string, any>;
    isLabelRight?: boolean;

    setValue?: (value: string) => void;
    blurHandler?: (value: FocusEvent<HTMLInputElement>) => void;
    changeWithEvent?: (value: ChangeEvent<HTMLInputElement>) => void;
}
