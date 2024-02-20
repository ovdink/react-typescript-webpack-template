import { FocusEvent, forwardRef, RefObject, useRef, useState } from 'react';

import { Expand } from 'components/other';

import * as T from './types';
import * as S from './units';

export const Input = forwardRef<HTMLInputElement, T.IInput>((props, ref) => {
    const [isFocused, setFocused] = useState(false);

    const inputRef = (ref as RefObject<HTMLInputElement>) || useRef<HTMLInputElement>(null);

    const clickInputFocusHandler = () => {
        !!inputRef.current && inputRef.current.focus();
    };

    const onBlur = (e: FocusEvent<HTMLInputElement>) => {
        setFocused(false);

        !!props.blurHandler && props.blurHandler(e);
    };

    const onFocus = () => {
        setFocused(true);
    };

    return (
        <S.Wrapper {...props}>
            <S.InputWrapper
                isError={!!props.isError}
                isDisabled={!!props.disabled}
                onClick={clickInputFocusHandler}
                {...{ isFocused }}
            >
                <S.Input
                    ref={inputRef}
                    type={props.type}
                    value={props.value}
                    onChange={(e) =>
                        !!props.changeWithEvent
                            ? props.changeWithEvent(e)
                            : !!props.setValue && props.setValue(e.target.value)
                    }
                    disabled={props.disabled}
                    withPadding={!props.isLabelRight && !!props.label}
                    {...props.inputProps}
                    {...{ onFocus, onBlur }}
                />

                {!!props.label &&
                    (!!props.isLabelRight ? (
                        <S.RightLabel isError={!!props.isError}>{props.label}</S.RightLabel>
                    ) : (
                        <S.Label isError={!!props.isError} isTop={isFocused || !!props.value}>
                            {props.label}
                        </S.Label>
                    ))}
            </S.InputWrapper>

            <Expand isOpen={!!props.isError}>
                <S.ErrorText>{props.errorText || 'Error text'}</S.ErrorText>
            </Expand>
        </S.Wrapper>
    );
});
