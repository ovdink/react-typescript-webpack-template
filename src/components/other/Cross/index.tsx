import { FC } from 'react';

import * as T from './types';
import * as S from './units';

export const Cross: FC<T.ICross> = (props) => {
    return (
        <S.IconWrapper {...props}>
            <S.CrossIcon />
        </S.IconWrapper>
    );
};
