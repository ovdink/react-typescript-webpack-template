import { FC } from 'react';

import * as T from './types';
import * as S from './units';

export const Tbody: FC<T.ITbody> = ({ children }) => {
    return <S.Tbody>{children}</S.Tbody>;
};
