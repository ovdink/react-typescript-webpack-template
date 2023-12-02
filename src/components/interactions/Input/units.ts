import styled from '@emotion/styled';

import { theme } from 'styles';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
`;

export const InputWrapper = styled.div<{
    isError: boolean;
    isFocused: boolean;
    isDisabled: boolean;
}>`
    position: relative;

    display: flex;
    align-items: center;
    gap: 12px;

    width: 100%;
    height: 48px;
    padding: 0 16px;

    background-color: ${({ isError }) => (isError ? theme.colors.red15 : theme.colors.box13)};

    border: 2px solid transparent;
    border-radius: ${theme.borderRadiusSecondary};

    &:focus-within {
        background-color: ${theme.colors.box13};

        border-color: ${({ isError }) => (isError ? theme.colors.red : theme.colors.primary)};
    }

    transition: all 0.15s ease-in-out;

    cursor: text;

    @media (hover: hover) {
        &:hover {
            background-color: ${({ isFocused, isError, isDisabled }) =>
                !isFocused && !isDisabled && (isError ? theme.colors.red25 : theme.colors.box24)};
        }
    }
`;

export const Input = styled.input<{ withPadding: boolean }>`
    width: 100%;
    padding: 0;
    padding-top: ${({ withPadding }) => withPadding && '15px'};

    font-weight: ${({ withPadding }) =>
        !withPadding ? theme.text.normal.fontWeight : theme.text.small.fontWeight};
    font-size: ${({ withPadding }) =>
        !withPadding ? theme.text.extraHuge.fontSize : theme.text.normal.fontSize};

    color: black;
    color: ${({ disabled }) => disabled && theme.colors.box24};

    background-color: transparent;

    text-overflow: ellipsis;
`;

export const Label = styled.p<{ isError: boolean; isTop: boolean }>`
    position: absolute;
    top: ${({ isTop }) => (isTop ? '3px' : '11px')};
    left: 16px;

    width: max-content;

    font-weight: ${theme.text.small.fontWeight};
    font-size: ${({ isTop }) =>
        isTop ? theme.text.superTiny.fontSize : theme.text.normal.fontSize};

    color: ${({ isError }) => (isError ? theme.colors.red : theme.colors.gray)};

    user-select: none;

    transition: all 0.15s ease-in-out;
`;

export const RightLabel = styled.p<{ isError: boolean }>`
    width: max-content;

    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.normal.fontSize};

    color: ${({ isError }) => (isError ? theme.colors.red : theme.colors.gray)};

    user-select: none;
`;

export const ErrorText = styled.p`
    width: 100%;
    padding-top: 4px;

    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.tiny.fontSize};

    color: ${theme.colors.red};

    user-select: none;
`;
