import { FC } from 'react';

import * as T from './types';
import * as S from './units';

export const Switch: FC<T.ISwitch> = (props) => {
    return (
        <S.SwitchWrapper
            onClick={() => !!props.setActive && props.setActive(!props.isActive)}
            {...props}
        >
            <S.Switch isActive={props.isActive} type={props.type}>
                {typeof props.icon === 'string' ? (
                    <S.Icon src={props.icon} />
                ) : (
                    props.icon || <S.DefaultIcon />
                )}
            </S.Switch>
        </S.SwitchWrapper>
    );
};
