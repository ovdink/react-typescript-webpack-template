import styled from '@emotion/styled';

import { theme } from 'styles';

export const PercentValue = styled.p<{ isRed: boolean; isTextCenter: boolean }>`
    font-size: ${theme.text.tiny.fontSize};
    font-weight: ${theme.text.small.fontWeight};

    text-align: ${({ isTextCenter }) => isTextCenter && 'center'};

    color: ${({ isRed }) => (isRed ? theme.colors.red : theme.colors.green)};
`;
