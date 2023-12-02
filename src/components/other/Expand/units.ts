import { css } from '@emotion/react';
import styled from '@emotion/styled';

import * as T from './types';

export const expandHeight = (
    height: number,
    isOpen: boolean,
    isHeightCalc: boolean,
    isAutoHeight: boolean,
    isHidden: boolean,
    isAutoHeightClose: boolean,
) => {
    switch (true) {
        case isHeightCalc && isOpen && isAutoHeight && !isHidden:
            return 'auto';
        case isHeightCalc && isOpen:
            return `${height}px`;
        case isHeightCalc && !isOpen && isAutoHeightClose && isAutoHeight:
            return `${height}px`;
        case isHeightCalc && !isOpen:
            return '0px';
        default:
            return 'auto';
    }
};

export const expandWidth = (
    isHorizontal = false,
    isOpen: boolean,
    width: number,
    isAutoWidth = false,
    isHidden: boolean,
    isAutoHeightClose: boolean,
) => {
    switch (true) {
        case isOpen && isAutoWidth && !isHidden && isHorizontal:
            return 'auto';
        case isOpen && isHorizontal:
            return `${width}px`;
        case !isOpen && isAutoHeightClose && isHorizontal:
            return `${width}px`;
        case !isOpen && isHorizontal:
            return '0px';
        default:
            return '100%';
    }
};

export const ExpandWrapper = styled.div<T.IExpandWrapper>`
    height: ${({
        height,
        isOpen,
        isHeightCalc = true,
        isAutoHeight = false,
        isHidden,
        isAutoHeightClose = false,
    }) => expandHeight(height, isOpen, isHeightCalc, isAutoHeight, isHidden, isAutoHeightClose)};

    height: ${({ isHorizontal }) => isHorizontal && '100%'};

    width: ${({ isHorizontal, isOpen, width, isAutoWidth, isHidden, isAutoHeightClose = false }) =>
        expandWidth(isHorizontal, isOpen, width, isAutoWidth, isHidden, isAutoHeightClose)};

    overflow: ${({ isHidden }) => isHidden && 'hidden'};

    cursor: ${({ isClickable }) => isClickable && 'pointer'};

    transition: all ${({ transition }) => `${transition}s`} ease-in-out;
`;

export const ChildrenContainer = styled.div<{
    display?: string;
    justifyContent?: string;
    alignItems?: string;
    isHorizontal?: boolean;
}>`
    display: ${({ display = 'block' }) => display};

    ${({ display, justifyContent = 'flex-start', alignItems = 'stretch' }) =>
        display === 'flex' &&
        css`
            justify-content: ${justifyContent};
            align-items: ${alignItems};
        `}

    width: ${({ isHorizontal }) => isHorizontal && 'max-content'};
`;
