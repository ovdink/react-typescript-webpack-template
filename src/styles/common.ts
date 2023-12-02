import { keyframes } from '@emotion/react';

/* animations */

export const dropdownShowAnimation = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.8);
    }
    
    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

export const dropdownHideAnimation = keyframes`
    0% {
        opacity: 1;
    }
    
    100% {
        opacity: 0;
    }
`;
