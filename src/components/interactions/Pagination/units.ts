import styled from '@emotion/styled';

import { theme } from 'styles';

import { ReactComponent as leftArrowSVG } from './images/left-arrow.svg';

import * as T from './types';

export const PaginationContainer = styled.div<
    Omit<T.IPagination, 'currentPage' | 'siblingCount' | 'boundaryCount' | 'onChange'>
>`
    display: flex;
    align-items: center;
    justify-content: ${({ position }) => position};
    gap: 8px;

    width: 100%;
`;

export const PaginationWrapper = styled.div`
    position: relative;

    display: flex;
    align-items: center;
    gap: 8px;
`;

export const PaginationItem = styled.div<{ isActive: boolean; isPointer: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 32px;
    min-height: 28px;
    padding: 2px 8px;

    font-size: ${theme.text.tiny.fontSize};

    font-weight: ${theme.text.normal.fontWeight};
    line-height: ${theme.text.normal.lineHeight};

    color: grey;

    background-color: transparent;

    border-radius: ${theme.borderRadiusSecondary};

    transition: background-color 0.15s ease-in-out;

    cursor: ${({ isPointer }) => isPointer && 'pointer'};

    user-select: none;

    z-index: ${theme.zIndex.upperElement};

    @media (hover: hover) {
        &:hover {
            background-color: ${({ isPointer, isActive }) =>
                isPointer && !isActive && theme.colors.box24};
        }
    }
`;

export const ArrowWrapper = styled.div<{ isDisabled: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 32px;
    height: 28px;

    background-color: transparent;

    border-radius: ${theme.borderRadiusSecondary};

    transition: background-color 0.15s ease-in-out;

    cursor: ${({ isDisabled }) => !isDisabled && 'pointer'};

    @media (hover: hover) {
        &:hover {
            background-color: ${({ isDisabled }) => !isDisabled && theme.colors.box13};
        }
    }
`;

export const LeftArrowIcon = styled(leftArrowSVG)<{ isdisabled: string }>`
    & > path {
        stroke: ${(props) => (!!props.isdisabled ? theme.colors.gray : props.theme.colors.text)};
    }
`;

export const RightArrowIcon = styled(LeftArrowIcon)`
    transform: rotate(180deg);
`;

export const ActiveBackgroung = styled.div<{ left: number; width: number; height: number }>`
    position: absolute;
    top: 0;
    left: ${({ left }) => `${left}px`};

    width: ${({ width }) => `${width}px`};
    height: ${({ height }) => `${height}px`};

    background-color: ${theme.colors.box24};

    border-radius: ${theme.borderRadiusSecondary};

    transition: left 0.4s ease-in-out;
`;
