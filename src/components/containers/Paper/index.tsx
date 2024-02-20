import { forwardRef } from 'react';

import { IPaper } from './types';
import * as S from './units';

export const Paper = forwardRef<HTMLDivElement, IPaper>(
    ({ isRounded = true, children, ...props }, ref) => {
        return <S.Paper {...{ ref, isRounded, ...props }}>{children}</S.Paper>;
    },
);
