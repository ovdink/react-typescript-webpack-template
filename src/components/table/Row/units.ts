import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from 'styles';

import * as T from './types';

const getHeight = (isHeader?: boolean, size?: string) =>
    isHeader ? '52px' : size === 'small' ? '88px' : size === 'huge' ? '120px' : '112px';

export const Row = styled.tr<T.IRow>`
    width: 100%;
    height: ${({ isHeader, size }) => getHeight(isHeader, size)};

    background-color: ${theme.colors.box7};

    background-color: ${({ withBackground = true }) =>
        withBackground ? theme.colors.box7 : 'transparent'};

    ${({ isHeader, size }) =>
        !isHeader &&
        css`
            & > td:first-of-type {
                position: relative;

                &::before {
                    content: '';

                    position: absolute;
                    top: 0;
                    left: 1px;

                    width: 2px;
                    height: ${getHeight(isHeader, size)};

                    background: linear-gradient(
                        180deg,
                        #ffb195 0%,
                        #e15c99 29.17%,
                        #ae76d4 60.42%,
                        #0654ec 91.67%
                    );

                    opacity: 0;

                    transition: opacity 0.15s ease-in-out;
                }
            }

            @media (hover: hover) {
                &:hover {
                    background-color: ${theme.colors.box10};

                    & > td:first-of-type {
                        &::before {
                            opacity: 1;
                        }
                    }
                }
            }
        `}
`;
