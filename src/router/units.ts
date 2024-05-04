import styled from '@emotion/styled';

import { toEnd } from 'styles';

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;

    min-height: 100%;
    padding: 8px 16px;

    background: grey;

    ${toEnd('mobile')} {
        padding: 4px 8px 8px;
    }
`;

export const BackgroundBlock = styled.div`
    position: fixed;
    inset: 0%;

    width: 100%;
    height: 100%;

    overflow: hidden;

    z-index: -1;
`;
