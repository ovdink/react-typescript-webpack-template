import styled from '@emotion/styled';

import { toEnd } from 'styles';

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100%;
    width: 100%;
    padding: 8px 16px;

    background: grey;

    ${toEnd('mobile')} {
        padding: 4px 8px 8px;
    }
`;

export const BackgroundBlock = styled.div`
    position: fixed;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;

    width: 100%;
    height: 100%;

    overflow: hidden;

    z-index: -1;
`;
