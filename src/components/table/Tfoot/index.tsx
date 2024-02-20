import { FC } from 'react';

import * as T from './types';
import * as S from './units';

export const Tfoot: FC<T.ITfoot> = ({ children }) => {
    return <S.Tfoot>{children}</S.Tfoot>;
};
