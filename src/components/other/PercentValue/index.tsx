import { FC } from 'react';

import { Skeleton } from '../Skeleton';

import * as T from './types';
import * as S from './units';

export const PercentValue: FC<T.IPercentValue> = ({
    value,
    isTextCenter = true,
    isLoading,
    ...props
}) => {
    const isNegative = value < 0;

    return (
        <>
            {isLoading ? (
                <Skeleton width={50} height={10} />
            ) : (
                <S.PercentValue isRed={isNegative} {...{ isTextCenter }} {...props}>{`${
                    isNegative ? '' : '+'
                }${value}%`}</S.PercentValue>
            )}
        </>
    );
};
