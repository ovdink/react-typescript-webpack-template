import { FC, useEffect, useRef, useState } from 'react';

import * as T from './types';
import * as S from './units';

/* если children absolute то надо убрать absolute у children
и сделать обёртку с absolute в которую надо поместить Expand с children.
желательно чтоб у children не был задан margin */
export const Expand: FC<T.IExpand> = ({
    transition = 0.4,
    seconds = 5,
    isHeightCalc = true,
    isHorizontal = false,
    ...props
}) => {
    const [height, setHeight] = useState(0);
    const [width, setWidth] = useState(0);
    const [isHidden, setHidden] = useState(true);
    const childrenRef = useRef<HTMLDivElement>(null);
    const [isAutoHeightClose, setAutoHeightClose] = useState(true);

    useEffect(() => {
        const closeTime = seconds && seconds * 1000;

        const hiddenTime = props.isOpen && setTimeout(() => setHidden(false), transition * 1000);

        const timeout =
            props.autoClose && setTimeout(() => !!props.setOpen && props.setOpen(false), closeTime);

        !props.isOpen && setAutoHeightClose(false);

        return () => {
            timeout && clearTimeout(timeout);
            setHidden(true);
            hiddenTime && clearTimeout(hiddenTime);
            setAutoHeightClose(true);
        };
    }, [props.isOpen]);

    useEffect(() => {
        setHeight(childrenRef.current?.clientHeight || 0);

        setWidth(childrenRef.current?.clientWidth || 0);
    }, [childrenRef.current?.clientHeight]);

    const clickHandler = () => {
        props.isClickable && !!props.setOpen && props.setOpen(false);
    };

    return (
        <S.ExpandWrapper
            isOpen={props.isOpen}
            isClickable={props.isClickable}
            onClick={clickHandler}
            isAutoHeight={props.isAutoHeight}
            isAutoWidth={props.isAutoWidth}
            {...{
                height,
                width,
                isHeightCalc,
                transition,
                isHidden,
                isHorizontal,
                isAutoHeightClose,
            }}
        >
            <S.ChildrenContainer ref={childrenRef} {...{ isHorizontal, ...props }}>
                {props.children}
            </S.ChildrenContainer>
        </S.ExpandWrapper>
    );
};
