import { FC, PropsWithChildren } from 'react';
import { default as SkeletonLib, SkeletonTheme } from 'react-loading-skeleton';

import * as T from './types';
import * as S from './units';

import 'react-loading-skeleton/dist/skeleton.css';

export const FlexSkeletonWrapper = ({ children }: PropsWithChildren<unknown>) => {
    return <S.SkeletonWrapper>{children}</S.SkeletonWrapper>;
};

export const Skeleton: FC<T.ISkeleton> = ({ borderRadius = 8, ...props }) => {
    return (
        <SkeletonTheme>
            <SkeletonLib
                style={{ zIndex: 0, animation: 'skeletonPulse 2s infinite' }}
                borderRadius={borderRadius}
                wrapper={FlexSkeletonWrapper}
                enableAnimation={false}
                {...props}
            />
        </SkeletonTheme>
    );
};
