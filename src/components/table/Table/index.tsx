import { FC } from 'react';

import * as T from './types';
import * as S from './units';

export const Table: FC<T.ITable> = (props) => {
    return <S.Table {...props}>{props.children}</S.Table>;
};
