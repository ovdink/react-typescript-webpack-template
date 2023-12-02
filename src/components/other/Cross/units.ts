import styled from '@emotion/styled';

import { theme } from 'styles';

import { ReactComponent as CrossSVG } from './images/cross-icon.svg';

export const IconWrapper = styled.div<{ size?: 'small' | 'normal' }>`
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${({ size }) => (size === 'small' ? '20px' : '28px')};
    height: ${({ size }) => (size === 'small' ? '20px' : '28px')};
    min-width: ${({ size }) => (size === 'small' ? '20px' : '28px')};
    min-height: ${({ size }) => (size === 'small' ? '20px' : '28px')};

    background-color: transparent;

    border-radius: 50%;

    transition: background-color 0.15s ease-in-out;

    cursor: pointer;

    & > svg {
        width: ${({ size }) => (size === 'small' ? '16px' : '24px')};
        height: ${({ size }) => (size === 'small' ? '16px' : '24px')};
        min-width: ${({ size }) => (size === 'small' ? '16px' : '24px')};
        min-height: ${({ size }) => (size === 'small' ? '16px' : '24px')};
    }

    @media (hover: hover) {
        &:hover {
            background-color: ${theme.colors.box24};
        }
    }
`;

export const CrossIcon = styled(CrossSVG)`
    & > path {
        stroke: ${({ theme }) => theme.colors.hintText};
    }
`;
