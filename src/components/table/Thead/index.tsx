import { FC } from 'react';

import * as T from './types';
import * as S from './units';

export const Thead: FC<T.IThead> = (props) => {
    return <S.Thead {...props}>{props.children}</S.Thead>;
};
