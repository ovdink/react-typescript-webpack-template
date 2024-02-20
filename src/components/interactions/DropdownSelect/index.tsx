import { FC, useRef, useState } from 'react';

import { useOutsideClick } from 'hooks';

import * as T from './types';
import * as S from './units';

export const DropdownSelect: FC<T.IDropdownSelect> = (props) => {
    const [isSelectOpen, setSelectOpen] = useState(false);

    const dropdownRef = useRef(null);

    useOutsideClick(dropdownRef, isSelectOpen, setSelectOpen);

    const clickHandler = (id: number | string) => {
        props.setSlectedItem(id);

        setSelectOpen(false);
    };

    return (
        <S.SelectWrapper ref={dropdownRef} {...props}>
            <S.ValueWrapper isOpen={isSelectOpen} onClick={() => setSelectOpen(!isSelectOpen)}>
                <S.Value>{props.activeItem?.title || props.title || 'Select'}</S.Value>

                {/* {!!props.activeItem?.subtitle && (
                    <S.TextGrayStyled>{props.activeItem.subtitle}</S.TextGrayStyled>
                )} */}

                <S.ArrowIcon isopen={isSelectOpen ? 'true' : ''} />
            </S.ValueWrapper>

            <S.DropdownWrapper {...{ isSelectOpen }}>
                <S.Connect>
                    {props.items?.map((item: any, index: number) => (
                        <S.Item
                            key={index}
                            isActive={item.id === props.activeItem?.id}
                            onClick={() => clickHandler(item.id)}
                        >
                            {item.title}

                            {/* {!!item.subtitle && (
                                <S.TextGrayStyled>{item.subtitle}</S.TextGrayStyled>
                            )} */}
                        </S.Item>
                    ))}
                </S.Connect>
            </S.DropdownWrapper>
        </S.SelectWrapper>
    );
};
