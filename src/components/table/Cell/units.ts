import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from 'styles';

import { ReactComponent as AscSortSvg } from './images/asc-sort.svg';
import { ReactComponent as DescSortSvg } from './images/desc-sort.svg';

import * as T from './types';

const commonStyle = css`
    padding: 0px 12px;

    &:first-of-type {
        padding-left: 24px;

        border-top-left-radius: ${theme.borderRadiusSecondary};
        border-bottom-left-radius: ${theme.borderRadiusSecondary};
    }

    &:last-of-type {
        padding-right: 24px;

        border-top-right-radius: ${theme.borderRadiusSecondary};
        border-bottom-right-radius: ${theme.borderRadiusSecondary};
    }
`;

export const Td = styled.td<Omit<T.ICell, 'position'>>`
    ${commonStyle}

    width: ${({ width }) => !!width && `${width}%`};
`;

export const Th = styled.th<Omit<T.ICell, 'position'>>`
    ${commonStyle}

    width: ${({ width }) => !!width && `${width}%`};
`;

export const TitleWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;

    user-select: none;

    cursor: ${({ onClick }) => !!onClick && 'pointer'};
`;

export const SortIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    min-width: 13px;
    min-height: 20px;

    border-radius: 20px;

    @media (hover: hover) {
        &:hover {
            background-color: ${theme.colors.box13};
        }
    }
`;

export const ContentWrapper = styled(TitleWrapper)<Pick<T.ICell, 'position'>>`
    justify-content: ${({ position }) =>
        position === 'end' ? 'flex-end' : position === 'start' ? 'flex-start' : 'center'};

    user-select: auto;
`;

export const AscSortIcon = styled(AscSortSvg)`
    & > path {
        transition: fill 0.15s ease-in-out;

        fill: ${({ theme }) => theme.colors.outlineCircleButtonText};
    }
`;

export const DescSortIcon = styled(DescSortSvg)`
    & > path {
        transition: fill 0.15s ease-in-out;

        fill: ${({ theme }) => theme.colors.outlineCircleButtonText};
    }
`;
