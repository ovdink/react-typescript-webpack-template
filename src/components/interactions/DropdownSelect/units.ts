import styled from '@emotion/styled';

import { dropdownHideAnimation, dropdownShowAnimation, theme } from 'styles';

import { ReactComponent as ArrowSVG } from './images/arrow.svg';

export const SelectWrapper = styled.div<{ size?: 'normal' | 'large' }>`
    position: relative;

    width: max-content;
`;

export const ValueWrapper = styled.div<{ isOpen: boolean; size?: 'normal' | 'large' }>`
    display: flex;
    align-items: center;
    gap: 6px;

    height: ${({ size = 'normal' }) => (size === 'large' ? '48px' : '40px')};
    padding: 0 8px 0 16px;

    background-color: black;

    border: 1px solid ${({ isOpen }) => (isOpen ? theme.colors.box24 : 'transparent')};
    border-radius: ${({ isOpen }) => (isOpen ? '8px 8px 0 0' : theme.borderRadiusSecondary)};

    user-select: none;

    cursor: pointer;

    transition: all 0.15s ease-in-out;

    @media (hover: hover) {
        &:hover {
            background-color: ${({ isOpen }) => !isOpen && theme.colors.box24};
        }
    }
`;

export const Value = styled.p`
    min-width: 70px;

    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.small.fontSize};

    color: black;

    white-space: nowrap;
`;

export const ArrowIcon = styled(ArrowSVG)<{ isopen: string }>`
    min-width: 8px;
    min-height: 6px;
    margin-left: auto;

    transition: transform 0.4s ease-in-out;

    transform: ${({ isopen }) => !!isopen && 'rotateX(180deg)'};
`;

export const DropdownWrapper = styled.div<{ isSelectOpen: boolean }>`
    position: absolute;
    top: 40px;
    left: 0;

    width: 100%;

    visibility: ${({ isSelectOpen }) => (isSelectOpen ? 'visible' : 'hidden')};

    animation-name: ${({ isSelectOpen }) =>
        isSelectOpen ? dropdownShowAnimation : dropdownHideAnimation};

    animation-duration: ${({ isSelectOpen }) => (isSelectOpen ? '0.4s' : '0.15s')};
    animation-fill-mode: forwards;

    z-index: ${theme.zIndex.dropdown};
`;

export const Connect = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    background-color: black;

    border: 1px solid ${theme.colors.box24};
    border-top: 2px solid ${theme.colors.primary};
    border-radius: 0 0 8px 8px;
`;

export const Item = styled.div<{ isActive: boolean }>`
    display: flex;
    gap: 6px;

    padding: 10px 16px;

    font-weight: ${theme.text.small.fontWeight};
    font-size: ${theme.text.small.fontSize};

    color: ${(props) => (props.isActive ? 'white' : 'black')};

    background-color: ${({ isActive }) => (isActive ? theme.colors.primary : 'transparent')};

    user-select: none;

    cursor: pointer;

    transition: all 0.15s ease-in-out;

    @media (hover: hover) {
        &:hover {
            background-color: ${({ isActive }) => !isActive && theme.colors.box24};
        }
    }
`;
