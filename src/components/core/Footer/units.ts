import styled from '@emotion/styled';

import { toEnd } from 'styles';

export const Container = styled.div`
    width: calc(100% + 32px);
    margin-top: auto;

    transform: translate(0, 8px);

    ${toEnd('mobile')} {
        width: calc(100% + 16px);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    width: 100%;
    margin-top: 100px;
    padding: 48px 16px 24px;

    background-color: lightblue;

    ${toEnd('mobile')} {
        padding: 8px 16px 18px;
    }
`;

export const MobileSupportWrapper = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    gap: 4px;

    width: 100%;
    margin-top: 18px;

    ${toEnd('mobile')} {
        display: flex;
    }
`;
