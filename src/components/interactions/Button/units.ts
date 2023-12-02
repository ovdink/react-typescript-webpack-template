import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from 'styles';

import * as T from './types';

const ButtonBase = styled.button<T.IButton>`
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.small.fontSize};
    white-space: nowrap;

    height: ${({ size }) => (size === 'small' ? '40px' : '48px')};
    width: 100%;
    padding: 0 24px;

    border: none;
    border-radius: ${theme.borderRadiusSecondary};

    transition: all 0.15s ease-in-out;

    user-select: none;

    & * path {
        transition: fill 0.15s ease-in-out;
    }

    &:not(:disabled) {
        cursor: pointer;
    }
`;

const primaryButtonStyle = css`
    color: ${theme.colors.white};

    background-color: ${theme.colors.primary};

    @media (hover: hover) {
        &:not(:disabled):hover {
            background-color: ${theme.colors.primaryHover};

            & * path {
                fill: ${theme.colors.white};
            }
        }
    }

    &:disabled {
        color: ${theme.colors.gray};

        background-color: ${theme.colors.primaryDisabled};
    }
`;

const transparentButtonStyle = css`
    height: 36px;

    background-color: ${theme.colors.box7};

    border-radius: 24px;

    @media (hover: hover) {
        &:not(:disabled):hover {
            background-color: ${theme.colors.box13};

            & * path {
                fill: ${theme.colors.white};
            }
        }
    }

    &:disabled {
        color: ${theme.colors.gray};
    }
`;

export const Button = styled(ButtonBase)<T.IButton>`
    ${({ styleScheme = 'primary' }) =>
        styleScheme === 'transparent' ? transparentButtonStyle : primaryButtonStyle}

    ${({ styleScheme }) =>
        styleScheme === 'transparent' &&
        css`
            color: blue;
        `}
`;

export const Icon = styled.div`
    display: flex;
    align-items: center;

    height: 100%;
    max-width: 30px;
    max-height: 30px;
    margin-right: 8px;
`;

const outlineCircleButtonStyle = css`
    background-color: transparent;

    border: 2px solid ${theme.colors.primary};

    @media (hover: hover) {
        &:not(:disabled):hover {
            color: ${theme.colors.white};

            background-color: ${theme.colors.primaryHover};

            border-color: ${theme.colors.primaryHover};

            & * path {
                fill: ${theme.colors.white};
            }
        }
    }

    &:disabled {
        color: ${theme.colors.gray};

        border-color: ${theme.colors.gray};
    }
`;

export const CircleButton = styled(ButtonBase)<T.ICircleButton>`
    ${({ styleScheme, theme }) =>
        styleScheme === 'outline' &&
        css`
            color: blue;
        `}

    width: max-content;

    border-radius: 64px;

    ${({ styleScheme = 'primary' }) =>
        styleScheme === 'primary' ? primaryButtonStyle : outlineCircleButtonStyle}
`;
