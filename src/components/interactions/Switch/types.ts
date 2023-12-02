import { ReactElement } from 'react';

export interface ISwitch {
    isActive: boolean;
    setActive?: (bool: boolean) => void;
    icon?: ReactElement | string;
    type?: 'small' | 'normal';
    withActiveBackground?: boolean;
}
