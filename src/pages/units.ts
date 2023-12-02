import styled from '@emotion/styled';

import { theme } from 'styles';

export const PageWrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;

    width: 100%;
    max-width: ${theme.maxContentWidth};
    margin-top: 80px;

    overflow: hidden;
`;
