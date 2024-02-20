import { FC } from 'react';

import * as T from './types';
import * as S from './units';

export const Link: FC<T.ILink> = ({ isBlank = true, ...props }) => {
    return (
        <>
            {props.isDefault ? (
                <S.DefaultLink href={props.url} target={isBlank ? '_blank' : ''} {...props}>
                    {props.children}
                </S.DefaultLink>
            ) : (
                <S.LinkStyled to={props.url} target={isBlank ? '_blank' : ''} {...props}>
                    {props.children}
                </S.LinkStyled>
            )}
        </>
    );
};
