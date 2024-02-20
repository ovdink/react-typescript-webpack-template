import { FC } from 'react';

import * as T from './types';
import * as S from './units';

export const Loader: FC<T.ILoader> = ({ size = 24, color = 'primary', ...props }) => {
    return <S.Loader {...{ size, color }} {...props} />;
};
