import { FC, useEffect, useRef, useState } from 'react';

import * as T from './types';
import * as S from './units';
import * as U from './utils';

export const Pagination: FC<T.IPagination> = ({
    position = 'start',
    currentPage = 1,
    siblingCount = 1,
    boundaryCount = 1,
    onChange,
    ...props
}) => {
    const [activeItemLeftMargin, setActiveItemLeftMargin] = useState<number>(0);
    const [activeItemWidth, setActiveItemWidth] = useState<number>(0);
    const [activeItemHeight, setActiveItemHeight] = useState<number>(0);

    const paginationRef = useRef<HTMLDivElement>(null);

    const onClickLeft = () => {
        currentPage !== 1 && onChange(currentPage - 1);
    };

    const onClickRight = () => {
        currentPage !== props.pagesCount && onChange(currentPage + 1);
    };

    const onClickItem = (value: number) => {
        value !== currentPage && onChange(value);
    };

    const paginationArr = U.createPagination(
        props.pagesCount,
        currentPage,
        siblingCount,
        boundaryCount,
    );

    useEffect(() => {
        if (paginationRef.current?.children.length) {
            const childrenElements = Array.from(paginationRef.current.children);

            const selectElem = childrenElements.find((item) => +item.innerHTML === currentPage);

            if (!!selectElem) {
                const parentViewport = paginationRef.current.getBoundingClientRect();
                const elementViewport = selectElem.getBoundingClientRect();

                const leftMargin = elementViewport.left - parentViewport.left;

                setActiveItemLeftMargin(leftMargin);
                setActiveItemWidth(elementViewport.width);
                setActiveItemHeight(elementViewport.height);
            }
        }
    }, [paginationRef, currentPage]);

    return (
        <S.PaginationContainer {...{ position }} {...props}>
            <S.ArrowWrapper isDisabled={currentPage === 1} onClick={onClickLeft}>
                <S.LeftArrowIcon isdisabled={currentPage === 1 ? 'true' : ''} />
            </S.ArrowWrapper>

            <S.PaginationWrapper ref={paginationRef}>
                <S.ActiveBackgroung
                    width={activeItemWidth}
                    height={activeItemHeight}
                    left={activeItemLeftMargin}
                />

                {paginationArr.map((item, index) => (
                    <S.PaginationItem
                        key={index}
                        isActive={item.selected}
                        isPointer={!!item.page || false}
                        onClick={() => item.page && onClickItem(item.page)}
                    >
                        {item.page || '...'}
                    </S.PaginationItem>
                ))}
            </S.PaginationWrapper>

            <S.ArrowWrapper isDisabled={currentPage === props.pagesCount} onClick={onClickRight}>
                <S.RightArrowIcon isdisabled={currentPage === props.pagesCount ? 'true' : ''} />
            </S.ArrowWrapper>
        </S.PaginationContainer>
    );
};
