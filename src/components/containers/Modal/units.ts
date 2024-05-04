import styled from '@emotion/styled';

import { Paper } from 'components/containers/Paper';
import { Cross } from 'components/other';

import { theme, toEnd } from 'styles';

import { ICrossPosition, IModalOverlayProps } from './types';

export const ModalOverlay = styled.div<IModalOverlayProps>`
    position: fixed;
    inset: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgb(7 11 15 / 70%);

    visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
    opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};

    transition: all ${({ isVisible }) => (isVisible ? '0.15s' : '0s')} ease-in-out;

    cursor: pointer;

    overflow: hidden;

    z-index: ${({ isHide }) => (isHide ? theme.zIndex.dropdown : theme.zIndex.modal)};

    ${toEnd('mobile')} {
        padding-left: 0;

        transition: all 0.4s ease-in-out;
    }
`;

export const ModalPaper = styled(Paper)<IModalOverlayProps>`
    width: 400px;
    max-height: calc(100% - 100px);
    padding: ${({ withTitle }) => (withTitle ? '0 24px 24px' : '24px')};

    background-color: gray;

    border-right: 2px solid gray;

    cursor: default;

    overflow: hidden auto;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-track {
        margin-top: 65px;
        margin-bottom: 80px;
    }

    ${toEnd('mobile')} {
        position: absolute;
        bottom: ${({ isVisible }) => (isVisible ? 0 : '-250px')};

        width: 100%;
        max-height: 100%;
        padding: ${({ withTitle }) => (withTitle ? '0 24px 24px' : '16px 24px 24px')};

        border-right: 0;

        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;

        transition: bottom 0.4s ease-in-out;

        &::-webkit-scrollbar-track {
            margin-bottom: 83px;
        }
    }
`;

export const TitleWrapper = styled.div`
    position: sticky;
    top: 0;
    left: 0;

    display: flex;

    width: calc(100% + 48px);
    padding: 24px 24px 16px;

    background-color: black;

    z-index: ${theme.zIndex.menu};

    transform: translateX(-24px);
`;

export const CrossStyled = styled(Cross)<{ position?: ICrossPosition }>`
    position: absolute;
    top: ${({ position }) => position?.top || '18px'};
    right: ${({ position }) => position?.right || '10px'};

    z-index: ${theme.zIndex.modal};
`;
