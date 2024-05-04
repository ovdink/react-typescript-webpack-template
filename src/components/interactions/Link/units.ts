import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { theme } from 'styles';

const commonStyle = css`
    position: relative;

    font-size: ${theme.text.tiny.fontSize};

    font-weight: ${theme.text.small.fontWeight};

    color: ${theme.colors.primary};

    cursor: pointer;

    @media (hover: hover) {
        &:hover {
            color: ${theme.colors.primaryHover};
        }
    }
`;

export const LinkStyled = styled(Link)`
    ${commonStyle}
`;

export const DefaultLink = styled.a`
    ${commonStyle}
`;
