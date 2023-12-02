import styled from '@emotion/styled';

import { theme } from 'styles';

import { IPaper } from './types';

export const Paper = styled.div<IPaper>`
    position: relative;

    display: inline-block;
    vertical-align: top;

    width: 100%;
    padding: 24px;

    background-color: ${theme.colors.box7};
    border-radius: ${({ isRounded }) => (isRounded ? theme.borderRadiusPrimary : 0)};
`;
