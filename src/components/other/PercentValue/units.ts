import styled from '@emotion/styled';

import { theme } from 'styles';

export const PercentValue = styled.p<{ isRed: boolean; isTextCenter: boolean }>`
    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.tiny.fontSize};

    color: ${({ isRed }) => (isRed ? theme.colors.red : theme.colors.green)};

    text-align: ${({ isTextCenter }) => isTextCenter && 'center'};
`;
