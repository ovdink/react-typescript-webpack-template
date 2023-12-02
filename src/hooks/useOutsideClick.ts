import { MutableRefObject, useEffect } from 'react';
import { Nullable } from 'types/common';

export const useOutsideClick = (
    ref: MutableRefObject<Nullable<HTMLDivElement | HTMLFormElement>>,
    isOpen: boolean,
    stateSetter: (bool: boolean) => void,
    exceptionRef?: MutableRefObject<Nullable<HTMLElement>>,
) => {
    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            const conditionOutside =
                !!ref.current &&
                !ref.current.contains(event.target as Node) &&
                isOpen &&
                (!!exceptionRef?.current
                    ? !exceptionRef.current.isEqualNode(event.target as Node)
                    : true);

            conditionOutside && stateSetter(false);
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [ref, isOpen]);
};
