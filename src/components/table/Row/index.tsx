import { FC } from 'react';

import * as T from './types';
import * as S from './units';

export const Row: FC<T.IRow> = ({ children, ...props }) => {
    return <S.Row {...props}>{children}</S.Row>;
};
