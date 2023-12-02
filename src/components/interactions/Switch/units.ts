import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from 'styles';

export const SwitchWrapper = styled.div<{
    isActive: boolean;
    withActiveBackground?: boolean;
    type?: 'small' | 'normal';
}>`
    position: relative;

    width: 32px;
    height: ${({ type }) => (type === 'small' ? '20px' : '24px')};
    padding: 1px;

    border-radius: 104px;

    cursor: pointer;

    transition: background-color 0.4s ease-in-out;

    background-color: ${({ withActiveBackground, isActive }) =>
        withActiveBackground && isActive ? theme.colors.green : theme.colors.box24};
`;

export const Switch = styled.div<{ isActive: boolean; type?: 'small' | 'normal' }>`
    position: absolute;
    top: 50%;
    left: ${({ isActive, type }) =>
        isActive
            ? `calc(100% - ${type === 'small' ? '10px' : '12px'})`
            : `${type === 'small' ? '10px' : '12px'}`};

    transform: translate(-50%, -50%);

    width: 22px;
    height: 22px;

    border-radius: 50%;

    transition: left 0.4s ease-in-out;

    ${({ type }) =>
        type === 'small' &&
        css`
            width: 18px;
            height: 18px;

            & > img {
                width: 18px;
                height: 18px;
            }

            & > div {
                width: 18px;
                height: 18px;
            }
        `}
`;

export const Icon = styled.img`
    width: 22px;
    height: 22px;
`;

export const DefaultIcon = styled.div`
    width: 22px;
    height: 22px;

    background-color: ${theme.colors.white};

    border-radius: 50%;
`;
