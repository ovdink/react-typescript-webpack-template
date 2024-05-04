import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from 'styles';

import * as T from './types';

const ButtonBase = styled.button<T.IButton>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    height: ${({ size }) => (size === 'small' ? '40px' : '48px')};
    padding: 0 24px;

    font-size: ${theme.text.small.fontSize};

    font-weight: ${theme.text.small.fontWeight};
    white-space: nowrap;

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

    &:disabled {
        color: ${theme.colors.gray};

        background-color: ${theme.colors.primaryDisabled};
    }

    @media (hover: hover) {
        &:not(:disabled):hover {
            background-color: ${theme.colors.primaryHover};

            & * path {
                fill: ${theme.colors.white};
            }
        }
    }
`;

const transparentButtonStyle = css`
    height: 36px;

    background-color: ${theme.colors.box7};

    border-radius: 24px;

    &:disabled {
        color: ${theme.colors.gray};
    }

    @media (hover: hover) {
        &:not(:disabled):hover {
            background-color: ${theme.colors.box13};

            & * path {
                fill: ${theme.colors.white};
            }
        }
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

    max-width: 30px;

    height: 100%;
    max-height: 30px;
    margin-right: 8px;
`;

const outlineCircleButtonStyle = css`
    background-color: transparent;

    border: 2px solid ${theme.colors.primary};

    &:disabled {
        color: ${theme.colors.gray};

        border-color: ${theme.colors.gray};
    }

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
`;

export const CircleButton = styled(ButtonBase)<T.ICircleButton>`
    ${({ styleScheme }) =>
        styleScheme === 'outline' &&
        css`
            color: blue;
        `}
    width: max-content;

    border-radius: 64px;

    ${({ styleScheme = 'primary' }) =>
        styleScheme === 'primary' ? primaryButtonStyle : outlineCircleButtonStyle}
`;
