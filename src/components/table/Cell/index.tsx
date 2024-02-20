import { FC } from 'react';

// import { Hint } from 'components/other';
import { ReactComponent as DefaultSortSvg } from './images/default-sort.svg';

import * as C from './const';
import * as T from './types';
import * as S from './units';

export const Cell: FC<T.ICell> = ({
    children,
    elementType = 'td',
    position = 'start',
    ...props
}) => {
    return (
        <>
            {elementType === 'th' ? (
                <S.Th {...props}>
                    <S.ContentWrapper {...{ position }}>
                        <S.TitleWrapper
                            onClick={props.isSortable && !!props.sort ? props.sort : undefined}
                        >
                            {children}

                            {props.isSortable && props.isSort ? (
                                <S.SortIconWrapper>
                                    {props.sortType === C.ASC ? (
                                        <S.AscSortIcon />
                                    ) : props.sortType === C.DESC ? (
                                        <S.DescSortIcon />
                                    ) : (
                                        <DefaultSortSvg />
                                    )}
                                </S.SortIconWrapper>
                            ) : (
                                props.isSortable && (
                                    <S.SortIconWrapper>
                                        <DefaultSortSvg />
                                    </S.SortIconWrapper>
                                )
                            )}
                        </S.TitleWrapper>

                        {/* {props.hintText && <Hint text={props.hintText} />} */}
                    </S.ContentWrapper>
                </S.Th>
            ) : (
                <S.Td {...props}>
                    <S.ContentWrapper {...{ position }}>
                        {children}

                        {/* {props.hintText && <Hint text={props.hintText} />} */}
                    </S.ContentWrapper>
                </S.Td>
            )}
        </>
    );
};
